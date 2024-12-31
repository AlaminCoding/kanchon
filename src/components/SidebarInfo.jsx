import Image from "next/image";
import Globe from "./icons/globe";
import { FaFacebookSquare, FaBehance } from "react-icons/fa";
import Facebook from "./icons/facebook";
import Behance from "./icons/Behance";
import Linkedin from "./icons/Linkedin";

const SidebarInfo = () => {
  return (
    <aside className="w-[260px] sticky top-[0px]">
      <div className="w-[260px] h-[190px] relative">
        <Image
          src="/kanchon.png"
          height={190}
          width={260}
          alt="main profile image"
          className="object-cover"
        />
      </div>
      <div className="bg-[#121212] p-[35px] mt-[-5px] pb-[80px] max-h-[calc(100vh-190px)] overflow-y-auto">
        <h2 className="text-[22px] font-light text-white uppercase leading-8 tracking-[2px]">
          Kanchon Sarkar
        </h2>
        <p className="text-white/60 text-[14px] font-light leading-[24px] mt-[26px]">
          As a Sr. UX Specialist at NEXTVentures, I combine human-centered
          design, problem-solving and user experience to create digital products
          & services.
        </p>
        <div className="mt-[80px]">
          <ul
            className="text-white/60 pl-4 space-y-4 font-light"
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
          <div className="mt-10 flex text-[18px] gap-[27px] items-center">
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
      </div>
    </aside>
  );
};

export default SidebarInfo;
