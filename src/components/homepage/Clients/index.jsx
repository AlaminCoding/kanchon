const clients = [
  "FundedNext",
  "NextVentures",
  "DESCO",
  "Basic Bank",
  "NRB Bank",
  "Othership",
  "Star Cineplex",
  "CashBaba",
  "EASY",
  "Dhakai",
  "SSL Wireless",
  "EBUDDY",
];

const Clients = () => {
  const list = [...clients, ...clients];
  return (
    <section className="py-7 border-y-[0.5px] border-white/20">
      <div className="home-container flex items-center">
        <p className="font-jetbrains text-[11px] text-white/60 uppercase w-[150px] shrink-0 tracking-widest">
          Trusted by
        </p>
        <div
          className="flex-1 overflow-hidden whitespace-nowrap"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          <div className="inline-block animate-marquee motion-reduce:animate-none">
            {list.map((client, index) => (
              <span
                key={index}
                className="inline-block px-[18px] font-jetbrains text-[13px] uppercase tracking-[0.06em] text-white"
              >
                {client}
                <span className="text-white/30 ml-[18px]">／</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
