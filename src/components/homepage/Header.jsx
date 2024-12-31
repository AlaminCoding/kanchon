import { BsPlusLg } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <h2 className="font-rebond text-white font-[100] text-[80px] leading-tight">
        architecting <br /> digital experiences by blending{" "}
        <span className="font-bold">aesthetics</span>{" "}
        <BsPlusLg className="inline text-[60px]" />
      </h2>
      <p className="uppercase text-[22px] font-[100] tracking-[3px] leading-[42px] text-white mt-[60px] max-w-[680px]">
        <span className="text-white/60">
          Design with 7+ years of experience in UX and Product design as well as
          Wire-framing, Visual Design, Interaction Design, and Prototyping.
        </span>
        <br />
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
