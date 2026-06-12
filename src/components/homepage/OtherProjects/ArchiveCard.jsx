import ArrowLink from "@/components/common/ArrowLink";
import { cn } from "@/lib/utils";
import Image from "next/image";

const hoverImgs = ["/archive-mock-a.webp", "/archive-mock-b.jpg"];
// deterministic pseudo-random pick per card so order looks scattered but stable on reload
const pickImg = (i) => hoverImgs[(i * 5 + 1) % hoverImgs.length];

const ArchiveCard = ({ project, index, total }) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  const lastRow = Math.floor((total - 1) / 3);

  return (
    <article
      className={cn(
        "group relative overflow-hidden w-full h-[280px] sm:h-[350px] transition-colors duration-[400ms] hover:bg-black max-sm:rounded-md max-sm:border border-white/10",
        col < 2 && "sm:border-r border-white/10",
        row < lastRow && "sm:border-b border-white/10",
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-[1] lg:hidden" />
      {/* full-bleed mockup — fades/zooms in on hover */}
      <div className="absolute inset-0 overflow-hidden opacity-100 lg:opacity-0 scale-[1.06] [transition:opacity_.5s_cubic-bezier(.2,.7,.2,1),transform_.8s_cubic-bezier(.2,.7,.2,1)] lg:group-hover:opacity-100 lg:group-hover:scale-100">
        <img
          src={pickImg(index)}
          alt=""
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center block"
        />
        <div className="absolute bottom-0 left-0 z-[2] w-full h-40 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-10">
          <ArrowLink href={project.link}>View project</ArrowLink>
        </div>
      </div>

      {/* content — fades out as the mockup takes over */}
      <div className="relative z-[2] h-full flex flex-col p-7 pb-[26px] transition-opacity duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] lg:group-hover:opacity-0 lg:group-hover:pointer-events-none justify-between">
        <div>
          <h3 className="font-interTight font-semibold text-[20px] lg:text-[26px] leading-[1.15] tracking-[-0.015em] text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-[13.5px] leading-[1.55] text-white/60 max-w-[42ch]">
            {project.body}
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2.5 py-[5px] border border-white/20 rounded-full font-jetbrains text-[9.5px] tracking-[0.14em] text-white/80 uppercase backdrop-blur-[6px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowLink href={project.link}>View project</ArrowLink>
        </div>
      </div>
    </article>
  );
};

export default ArchiveCard;
