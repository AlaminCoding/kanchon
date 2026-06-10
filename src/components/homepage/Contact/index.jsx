import SectionLeftTitle from "@/components/common/SectionLeftTitle";
import { cn } from "@/lib/utils";

const EMAIL = "kanchonsk26@gmail.com";
const LINKEDIN = "linkedin.com/in/kanchon-sarker";

/* pill button — fill sweeps up from the bottom on hover, inverting colors */
const btnBase =
  "relative isolate overflow-hidden inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-interTight text-[13px] font-medium tracking-[-0.005em] transition-all duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-0.5 before:content-[''] before:absolute before:inset-0 before:-z-10 before:translate-y-[102%] before:transition-transform before:duration-500 before:ease-[cubic-bezier(.2,.8,.2,1)] hover:before:translate-y-0";

/* underline that retracts left on hover */
const underlineLink =
  "relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-px after:bg-current after:scale-x-100 after:origin-right after:transition-transform after:duration-[450ms] after:ease-[cubic-bezier(.2,.8,.2,1)] hover:after:scale-x-0 hover:after:origin-left";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-[140px] pb-[120px] border-t border-white/10"
    >
      <div className="flex items-start">
        <SectionLeftTitle title="Contact" className="mt-2" />
        <div className="flex-1">
          <h2 className="mb-10 font-interTight font-light text-[55px] lg:text-[88px] leading-[110%] max-w-[17ch] text-white/80">
            If the brief involves ambiguity,{" "}
            <em className="font-instrument italic font-normal text-white">
              we should probably talk.
            </em>
          </h2>

          <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-10 border-t border-white pt-7">
            <div>
              <p className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase mb-2.5">
                Direct
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className={cn(
                  "font-interTight text-[22px] tracking-[-0.015em] text-white",
                  underlineLink,
                )}
              >
                {EMAIL}
              </a>
              <div className="mt-2.5">
                <a
                  href={`https://${LINKEDIN}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("text-white/60", underlineLink)}
                >
                  {LINKEDIN}
                </a>
              </div>
            </div>
            <div>
              <p className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase mb-2.5">
                Availability
              </p>
              <p className="text-[15px] leading-[1.5] max-w-[38ch] text-white">
                Taking one advisory engagement and one audit per quarter. Next
                window opens{" "}
                <span className="border-b border-white">Q3 2026</span>.
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-3.5">
            <a
              href={`mailto:${EMAIL}`}
              className={cn(
                btnBase,
                "bg-white text-black before:bg-black hover:text-white hover:shadow-[0_10px_24px_-12px_rgba(0,0,0,0.28)]",
              )}
            >
              Start a conversation →
            </a>
            <a
              href="/Kanchon_Sarker_Resume.pdf"
              download
              className={cn(
                btnBase,
                "bg-transparent text-white border border-white before:bg-white hover:text-black",
              )}
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
