import Globe from "./icons/globe";
import { FaFacebookSquare, FaBehance } from "react-icons/fa";

const SidebarInfo = () => {
  return (
    <aside className="w-[260px] sticky top-[190px]">
      <video muted autoPlay loop className="w-full">
        <source src="/info-video.mp4" type="video/mp4" />
      </video>
      <div className="font-rebond bg-baltic pt-[30px] pr-[45px] pb-[40px] pl-[25px] mt-[-5px]">
        <h2 className="text-[36px] name-gradient font-bold leading-tight">
          Kanchon Sarkar
        </h2>
        <p className="text-dolphin leading-[24px] mt-[26px]">
          As a Sr. UX Designer at SSL Wireless, I combine human - centered
          design, problem-solving and user experience to create intuitive and
          effective digital products and services.
        </p>
        <div className="mt-[100px] flex text-[18px] gap-[20px] items-center">
          <a href="#" className="text-dove">
            <Globe />
          </a>
          <a href="#" className="text-dove">
            <FaFacebookSquare />
          </a>
          <a href="#" className="text-dove">
            <FaBehance />
          </a>
        </div>
        <a
          href="#"
          className="font-bold text-dove mt-[24px] inline-block underline"
        >
          View Resume
        </a>
      </div>
    </aside>
  );
};

export default SidebarInfo;
