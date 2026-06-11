import Link from "next/link";
import { cn } from "@/lib/utils";

const ArrowLink = ({ children, href = "#", className = "" }) => {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-jetbrains text-[11px] uppercase tracking-[0.12em] text-white transition-all duration-300 hover:tracking-[0.14em]",
        className,
      )}
    >
      <span>{children}</span>
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        className="transition-transform duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-[5px] group-hover:-translate-y-[5px]"
      >
        <path
          d="M1 10 L10 1 M10 1 H3 M10 1 V8"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </Link>
  );
};

export default ArrowLink;
