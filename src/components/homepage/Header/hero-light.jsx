"use client";
import { useEffect, useRef } from "react";

/* Flow-field particle background — canvas 2D, no WebGL.
   Honours prefers-reduced-motion (renders a still frame) and
   pauses when scrolled offscreen. */
const HeroLight = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0,
      H = 0,
      raf = 0,
      running = true;
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const size = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const onResize = () => size();
    window.addEventListener("resize", onResize);

    // tiny 2D pseudo-noise (hash-based, cheap)
    const hash = (x, y) => {
      const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };
    const smooth = (t) => t * t * (3 - 2 * t);
    const noise2 = (x, y) => {
      const xi = Math.floor(x),
        yi = Math.floor(y);
      const xf = x - xi,
        yf = y - yi;
      const a = hash(xi, yi),
        b = hash(xi + 1, yi);
      const c = hash(xi, yi + 1),
        d = hash(xi + 1, yi + 1);
      const u = smooth(xf),
        v = smooth(yf);
      return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
    };

    // particles (flow field)
    const N = 140;
    const parts = new Array(N).fill(0).map(() => ({
      x: Math.random(),
      y: Math.random(),
      px: 0,
      py: 0,
      life: Math.random() * 1,
      maxLife: 3 + Math.random() * 4,
    }));
    parts.forEach((p) => {
      p.px = p.x;
      p.py = p.y;
    });

    const bg = "#050608";

    const draw = (t) => {
      // trail fade
      ctx.fillStyle = "rgba(5,6,8,0.08)";
      ctx.fillRect(0, 0, W, H);

      const time = t * 0.00004;
      const ar = W / H;

      for (let i = 0; i < N; i++) {
        const p = parts[i];
        // sample flow angle from noise
        const n = noise2(p.x * 3 + time, p.y * 3 - time * 0.5);
        const ang = n * Math.PI * 2.2;
        const speed = 0.0012 + 0.001 * noise2(p.x * 1.4 - time, p.y * 1.4 + time);
        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(ang) * speed;
        p.y += Math.sin(ang) * speed * ar;
        p.life += 0.016;

        // wrap / recycle
        if (
          p.x < -0.05 ||
          p.x > 1.05 ||
          p.y < -0.05 ||
          p.y > 1.05 ||
          p.life > p.maxLife
        ) {
          p.x = Math.random();
          p.y = Math.random();
          p.px = p.x;
          p.py = p.y;
          p.life = 0;
          p.maxLife = 3 + Math.random() * 4;
        }

        // life fade (in & out)
        const lifeN = p.life / p.maxLife;
        const alpha = Math.sin(lifeN * Math.PI) * 0.6;

        // color: cool whites with faint blue bias
        const hueBias = 0.7 + 0.3 * noise2(p.x * 0.8, p.y * 0.8 + time);
        const r = 200 + 30 * hueBias;
        const g = 215 + 30 * hueBias;
        const b = 255;

        ctx.strokeStyle = `rgba(${r | 0},${g | 0},${b},${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(p.px * W, p.py * H);
        ctx.lineTo(p.x * W, p.y * H);
        ctx.stroke();
      }
    };

    // initial paint (solid bg once)
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    let start = performance.now();
    const loop = (now) => {
      if (!running) return;
      draw(now - start);
      raf = requestAnimationFrame(loop);
    };
    if (prefersReduce) {
      // render a few steps then stop — a still "photograph" of the field
      for (let i = 0; i < 200; i++) draw(i * 16);
    } else {
      raf = requestAnimationFrame(loop);
    }

    // pause when offscreen (battery-friendly)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (prefersReduce) return;
          if (e.isIntersecting && !running) {
            running = true;
            start = performance.now();
            raf = requestAnimationFrame(loop);
          } else if (!e.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        });
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050608]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* soft top light — signals the "source" */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(120,150,255,0.22), transparent 60%)",
        }}
      />
      {/* safe reading zone — protects headline contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,6,8,0) 0%, rgba(5,6,8,0.55) 60%, rgba(5,6,8,0.85) 100%)",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 260px rgba(0,0,0,0.8)" }}
      />
    </div>
  );
};

export default HeroLight;
