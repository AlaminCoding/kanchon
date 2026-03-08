import AnimatedTitles from "./animated-titles";

const Header = () => {
  return (
    <>
      <h2 className="font-jakarta text-white font-[700] text-[80px] leading-tight tracking-[-4%]">
        architecting <br /> digital experiences by blending{" "}
        <AnimatedTitles
          titles={["aesthetics", "usability", "functionality"]}
          className="text-monsoon"
        />
      </h2>
      <p className="uppercase text-[20px] font-[100] tracking-[8%] leading-[40px] text-white mt-[60px] font-jakarta max-w-[760px]">
        <span className="text-white/80">
          Design with 7+ years of experience in UX and Product design as well as
          Wire-framing, Visual Design, Interaction Design, and Prototyping.
        </span>{" "}
        <span className="text-white/30">
          My approach focuses on creating simple yet emotionally engaging
          products that solve problems and create meaningful experiences for
          users.
        </span>
      </p>
    </>
  );
};

export default Header;
