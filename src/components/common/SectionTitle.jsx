import { cn } from "@/lib/utils";

const SectionTitle = ({ title, className }) => {
  return (
    <h3
      className={cn(
        "text-white text-[26px] sm:text-[32px] lg:text-[44px] font-interTight leading-[130%]",
        className,
      )}
    >
      {title}
    </h3>
  );
};

export default SectionTitle;
