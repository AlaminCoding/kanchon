import Image from "next/image";
import Globe from "./icons/globe";
import Facebook from "./icons/facebook";
import Behance from "./icons/Behance";
import Linkedin from "./icons/Linkedin";

const SidebarInfo = () => {
  return (
    <aside className="bg-black w-[240px] sticky left-0 top-0 p-[30px] pt-[60px] h-[100dvh] overflow-y-auto border-r-[0.5px] border-white/20 flex flex-col justify-between gap-10">
      <div>
        <Image
          src="/kanchon-ux.png"
          height={213.03}
          width={160}
          alt="main profile image"
        />
        <p className="text-white text-[13px] font-thin leading-[24px] mt-5 font-jakarta">
          I’m <u>Kanchon Sarker</u>, Sr. UX Specialist @NEXT Ventures • Product
          Designer • Visual Expert • Interaction design • UX Audit • CUX • BUX
        </p>
      </div>
      <div>
        <ul
          className="text-white/75 pl-4 space-y-4 font-thin font-jakarta"
          style={{ listStyle: "square" }}
        >
          <li>
            <a href="#">case studies</a>
          </li>

          <li>
            <a href="#">other projects</a>
          </li>
          <li>
            <a href="#">say hello</a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              resume{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-[1px]"
              >
                <path
                  d="M7.71393 3.24291L1.88949 9.06736L0.932617 8.11049L6.75638 2.28604H1.62354V0.932617H9.06735V8.37644H7.71393V3.24291Z"
                  fill="white"
                  fillOpacity="0.6"
                  stroke="#121212"
                  strokeWidth="0.6"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className="mt-10 flex text-[18px] justify-between items-center">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Globe />
          </a>
          <a href="#">
            <Behance />
          </a>
          <a href="#" className="text-dove">
            <Linkedin />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SidebarInfo;
