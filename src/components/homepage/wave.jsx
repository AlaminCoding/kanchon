import wave from "@/assets/images/wave.gif";
import Image from "next/image";
const Wave = () => {
  return (
    <div className="absolute top-[-150px] left-[45%] translate-x-[-50%] z-[-1] overflow-hidden">
      <Image src={wave} alt="Wave gif" />
    </div>
  );
};

export default Wave;
