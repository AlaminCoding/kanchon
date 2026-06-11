import SectionLeftTitle from "@/components/common/SectionLeftTitle";

const S = {
  stroke: "#fff",
  strokeWidth: 1,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const steps = [
  {
    label: "Empathize",
    note: "Listen, observe, interview",
    svg: (
      <svg viewBox="0 0 64 64" width="100%" height="100%" className="mi-eye">
        <g {...S}>
          <path
            className="mi-eye-lid"
            d="M8 32 C 16 18, 48 18, 56 32 C 48 46, 16 46, 8 32 Z"
          />
          <circle className="mi-eye-pupil" cx="32" cy="32" r="8" />
        </g>
      </svg>
    ),
  },
  {
    label: "Ideate",
    note: "Diverge, sketch, combine",
    svg: (
      <svg viewBox="0 0 64 64" width="100%" height="100%" className="mi-bulb">
        <g {...S}>
          {/* bulb dome */}
          <path d="M20 30 C 20 19, 27 13, 32 13 C 37 13, 44 19, 44 30 C 44 36, 40 40, 38 44 L 26 44 C 24 40, 20 36, 20 30 Z" />
          {/* base */}
          <path d="M27 48 L 37 48" />
          <path d="M28 52 L 36 52" />
          <path d="M30 56 L 34 56" />
          {/* filament */}
          <path className="mi-bulb-fil" d="M28 30 Q 32 36 36 30" />
          {/* rays */}
          <g className="mi-bulb-rays">
            <path d="M32 6 L 32 10" />
            <path d="M12 22 L 15 24" />
            <path d="M52 22 L 49 24" />
            <path d="M8 36 L 12 36" />
            <path d="M56 36 L 52 36" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    label: "Research",
    note: "Frame, evidence, patterns",
    svg: (
      <svg viewBox="0 0 64 64" width="100%" height="100%" className="mi-globe">
        <g {...S}>
          <circle cx="32" cy="32" r="20" />
          <path d="M12 32 L 52 32" />
          <ellipse className="mi-globe-mer" cx="32" cy="32" rx="9" ry="20" />
        </g>
      </svg>
    ),
  },
  {
    label: "Design",
    note: "System, craft, ship",
    svg: (
      <svg viewBox="0 0 64 64" width="100%" height="100%" className="mi-pen">
        <g {...S}>
          {/* Two overlapping circles — Venn / Mastercard style */}
          <circle className="mi-venn-l" cx="24" cy="32" r="14" />
          <circle className="mi-venn-r" cx="40" cy="32" r="14" />
        </g>
      </svg>
    ),
  },
  {
    label: "Test",
    note: "Validate, measure, iterate",
    svg: (
      <svg viewBox="0 0 64 64" width="100%" height="100%" className="mi-laptop">
        <g {...S}>
          {/* monitor screen with rounded corners */}
          <rect x="8" y="12" width="48" height="34" rx="6" />
          {/* tiny waveform inside screen, draws in on hover */}
          <path
            className="mi-laptop-line"
            d="M16 30 L 22 30 L 24 24 L 28 36 L 32 26 L 36 30 L 48 30"
          />
          {/* stand neck */}
          <path d="M32 46 L 32 52" />
          {/* base */}
          <path d="M22 54 L 42 54" />
        </g>
      </svg>
    ),
  },
];

const Methodology = () => {
  return (
    <section
      className="py-[50px] sm:py-[90px] sm:pb-[110px] border-b-[0.5px] border-white/20 overflow-hidden"
      id="methodology"
    >
      <div className="home-container">
        <div className="flex sm:flex-row flex-col items-start">
          <SectionLeftTitle
            title={"Methodology I Follow"}
            className="sm:mt-7"
          />
          <div className="flex-1 sm:mt-0 mt-3">
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-4 items-start">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center gap-2 sm:gap-5 method-step"
                >
                  <div className="method-icon sm:w-[148px] sm:h-[148px] max-w-[100%]">
                    {s.svg}
                  </div>
                  <div className="flex flex-col items-center gap-1.5 font-jetbrains">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-white/40 tracking-[0.14em] uppercase">
                        0{i + 1}
                      </span>
                      <span className="method-label text-[11px] text-white/85 tracking-[0.12em] uppercase">
                        {s.label}
                      </span>
                    </div>
                    <div className="method-note text-[10px] text-white/35 tracking-[0.06em] text-center lowercase">
                      {s.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
        .method-icon{display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0.55;transition:opacity .4s ease, transform .45s cubic-bezier(.2,.8,.2,1);}
        .method-step:hover .method-icon{opacity:1;transform:translateY(-2px);}
        .method-step:hover .method-label{color:#fff;}
        .method-step:hover .method-note{color:rgba(255,255,255,0.65);}
        .method-label,.method-note{transition:color .3s;}

        /* 01 Eye — pupil scales, lid briefly blinks */
        .mi-eye .mi-eye-pupil{transform-origin:32px 32px;transition:transform .35s cubic-bezier(.2,.8,.2,1);}
        .mi-eye .mi-eye-lid{transform-origin:32px 32px;}
        .method-step:hover .mi-eye .mi-eye-pupil{transform:scale(1.4);}
        .method-step:hover .mi-eye .mi-eye-lid{animation:miBlink 1.6s ease-in-out 0.4s 1;}
        @keyframes miBlink{0%,40%,100%{transform:scaleY(1);}50%,60%{transform:scaleY(0.05);}}

        /* 02 Bulb — filament draws, rays bloom */
        .mi-bulb .mi-bulb-fil{stroke-dasharray:18;stroke-dashoffset:18;transition:stroke-dashoffset .5s ease;}
        .method-step:hover .mi-bulb .mi-bulb-fil{stroke-dashoffset:0;}
        .mi-bulb .mi-bulb-rays > path{transform-origin:32px 32px;transform:scale(0.5);opacity:0;transition:transform .45s cubic-bezier(.2,.8,.2,1), opacity .4s ease;}
        .method-step:hover .mi-bulb .mi-bulb-rays > path{transform:scale(1);opacity:1;}
        .method-step:hover .mi-bulb .mi-bulb-rays > path:nth-child(1){transition-delay:.05s;}
        .method-step:hover .mi-bulb .mi-bulb-rays > path:nth-child(2){transition-delay:.1s;}
        .method-step:hover .mi-bulb .mi-bulb-rays > path:nth-child(3){transition-delay:.15s;}
        .method-step:hover .mi-bulb .mi-bulb-rays > path:nth-child(4){transition-delay:.2s;}
        .method-step:hover .mi-bulb .mi-bulb-rays > path:nth-child(5){transition-delay:.25s;}

        /* 03 Globe — meridian "rotates" by squashing rx */
        .mi-globe .mi-globe-mer{transform-origin:32px 32px;transition:transform .45s ease;}
        .method-step:hover .mi-globe .mi-globe-mer{animation:miGlobe 3.2s linear infinite;}
        @keyframes miGlobe{
          0%   {transform:scaleX(1);}
          25%  {transform:scaleX(0.1);}
          50%  {transform:scaleX(-1);}
          75%  {transform:scaleX(-0.1);}
          100% {transform:scaleX(1);}
        }

        /* 04 Design — two circles cross into each other on hover */
        .mi-pen .mi-venn-l,
        .mi-pen .mi-venn-r{transition:transform .55s cubic-bezier(.2,.8,.2,1);transform-origin:center;}
        .method-step:hover .mi-pen .mi-venn-l{transform:translateX(4px);}
        .method-step:hover .mi-pen .mi-venn-r{transform:translateX(-4px);}

        /* 05 Test — screen waveform draws in */
        .mi-laptop .mi-laptop-line{stroke-dasharray:40;stroke-dashoffset:40;transition:stroke-dashoffset .55s cubic-bezier(.2,.8,.2,1);}
        .method-step:hover .mi-laptop .mi-laptop-line{stroke-dashoffset:0;}

        @media (max-width: 860px){
          .method-grid{grid-template-columns:repeat(3, 1fr) !important;gap:28px 16px !important;}
        }
        @media (max-width: 520px){
          .method-grid{grid-template-columns:repeat(2, 1fr) !important;}
        }
        @media (prefers-reduced-motion: reduce){
          .method-step:hover .method-icon{transform:none;}
          .mi-eye .mi-eye-pupil,
          .mi-eye .mi-eye-lid,
          .mi-bulb .mi-bulb-rays > path,
          .mi-globe .mi-globe-mer,
          .mi-pen .mi-venn-l,
          .mi-pen .mi-venn-r{transition:none !important;transform:none !important;animation:none !important;}
          .mi-bulb .mi-bulb-fil,
          .mi-laptop .mi-laptop-line{stroke-dashoffset:0 !important;}
        }
      `}</style>
      </div>
    </section>
  );
};

export default Methodology;
