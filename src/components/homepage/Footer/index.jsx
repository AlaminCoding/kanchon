const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="grid grid-cols-[180px_1fr_1fr] max-[820px]:grid-cols-1 gap-6 max-[820px]:gap-2 items-center">
        <p className="font-jetbrains text-[10px] text-white/60 tracking-[0.12em] uppercase">
          © 2026 Kanchon Sarker
        </p>
        <p className="font-jetbrains text-[10px] text-white/60 tracking-[0.12em] uppercase">
          Designed & built in Dhaka · Set in Inter Tight, Instrument Serif &
          JetBrains Mono
        </p>
        <p className="font-jetbrains text-[10px] text-white/60 tracking-[0.12em] uppercase text-right max-[820px]:text-left">
          v26.04 · Portfolio release
        </p>
      </div>
    </footer>
  );
};

export default Footer;
