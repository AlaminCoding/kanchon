import Link from "next/link";

const CaseFooter = ({ data }) => {
  return (
    <div className="case-container">
      <footer className="flex items-center justify-between max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-6 py-20 max-[560px]:py-[60px] border-t border-white/5">
        <p className="font-jetbrains text-[10px] font-bold tracking-[0.12em] uppercase text-white/20">
          {data.label}
        </p>
        <Link
          href="/"
          className="group flex items-center gap-2.5 hover:gap-[13px] text-white/40 hover:text-white text-[13px] font-medium transition-[color,gap] duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="transition-transform duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-x-[3px]"
          >
            <path d="M8.5 2L3.5 7l5 5" />
          </svg>
          Back to portfolio
        </Link>
      </footer>
    </div>
  );
};

export default CaseFooter;
