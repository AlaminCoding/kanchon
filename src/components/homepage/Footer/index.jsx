import SocialFooter from "@/components/SidebarInfo/social-footer";
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="w-[200px] min-[992px]:hidden mb-7">
        <SocialFooter showTime={false} />
      </div>
      <div className="grid lg:grid-cols-[180px_1fr] grid-cols-1 gap-2 items-center">
        <p className="font-jetbrains text-[10px] text-white/60 tracking-[0.12em] uppercase">
          © 2026 Kanchon Sarker
        </p>
        <p className="font-jetbrains text-[10px] text-white/60 tracking-[0.12em] uppercase">
          Designed & built in Dhaka · Set in Inter Tight, Instrument Serif &
          JetBrains Mono
        </p>
      </div>
    </footer>
  );
};

export default Footer;
