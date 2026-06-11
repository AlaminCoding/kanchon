import SectionLeftTitle from "@/components/common/SectionLeftTitle";
import { cn } from "@/lib/utils";
import { AboutData } from "./about.data";
import SectionTitle from "@/components/common/SectionTitle";
import SectionText from "@/components/common/SectionText";

const About = () => {
  const { title, lede, timeline, recognition, toolkit } = AboutData;
  return (
    <section
      id="about"
      className="py-[50px] sm:py-[120px] border-t border-white/10"
    >
      {/* section header */}
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-start pb-7 border-b border-white/10 mb-7 sm:mb-14">
        <SectionLeftTitle title="About" className="sm:mt-2" />
        <div className="space-y-5">
          <SectionTitle title={title} className="max-w-[500px]" />
          <SectionText text={lede} className="max-w-[58ch]" />
        </div>
      </div>

      {/* body — track record | recognition + toolkit */}
      <div className="flex items-start">
        <div
          className="w-[100px] xl:w-[180px] shrink-0 sm:block hidden"
          aria-hidden="true"
        />
        <div className="flex-1 grid lg:grid-cols-2 grid-cols-1 gap-7 sm:gap-10 items-start">
          {/* track record */}
          <div>
            <p className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase mb-5">
              Track record
            </p>
            {timeline.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "grid grid-cols-[100px_1fr] gap-4 py-5 border-t",
                  i === 0 ? "border-white" : "border-white/10",
                )}
              >
                <span className="font-jetbrains text-[11px] text-white/60 tracking-[0.08em]">
                  {t.range}
                </span>
                <div>
                  <p className="text-[16px] font-medium tracking-[-0.01em] text-white">
                    {t.role}{" "}
                    <span className="text-white/60 font-normal">— {t.org}</span>
                  </p>
                  <p className="text-white/60 text-[14px] leading-[1.5] mt-1 max-w-[54ch]">
                    {t.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* recognition + toolkit */}
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase mb-5">
                Recognition
              </p>
              {recognition.map((r, i) => (
                <div
                  key={i}
                  className={cn(
                    "grid grid-cols-[100px_1fr] lg:grid-cols-[60px_1fr] gap-4 py-5 border-t",
                    i === 0 ? "border-white" : "border-white/10",
                  )}
                >
                  <span className="font-jetbrains text-[11px] text-white/60">
                    {r.year}
                  </span>
                  <div>
                    <p className="text-[14px] text-white">{r.award}</p>
                    <p className="text-white/60 text-[12px]">{r.org}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase mb-4">
                Toolkit
              </p>
              <div className="flex flex-wrap gap-1.5">
                {toolkit.map((skill, i) => (
                  <span
                    key={i}
                    className="font-jetbrains px-2.5 py-[5px] border border-white/20 rounded-full text-[10px] tracking-[0.08em] uppercase text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
