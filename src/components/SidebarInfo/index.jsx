import DynamicImage from "./dynamic-image";
import Menu from "./menu";
import SocialFooter from "./social-footer";

const SidebarInfo = () => {
  return (
    <aside className="bg-black w-[240px] sticky left-0 top-0 p-[30px] pt-[60px] h-[100dvh] overflow-y-auto border-r-[0.5px] border-white/20 hidden min-[992px]:flex flex-col justify-between gap-10">
      <div>
        <DynamicImage />
        <p className="text-white/60 text-[11px] font-thin leading-[18px] mt-5 font-jetbrains">
          <span className="text-white">I'm Kanchon Sarker,</span> Sr. UX
          Specialist @NextVentures · Product Design · Visual Expert ·
          Interaction Design · UX Audit · CUX · BUX
        </p>
      </div>

      <Menu />

      <SocialFooter />
    </aside>
  );
};

export default SidebarInfo;
