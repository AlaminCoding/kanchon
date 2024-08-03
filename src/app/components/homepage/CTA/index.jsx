import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const CTA = () => {
  return (
    <section className="mt-[100px]">
      <h2 className="text-white font-rebond text-[48px] font-bold">
        Let’s get started!
      </h2>
      <p className="mt-[30px] font-sourcesans text-santa/60 text-[20px] max-w-[422px]">
        Seeking a partner to elevate your online presence? Let's design
        something unforgettable and dive into the world of limitless
        possibilities.
      </p>
      <Link href="/" className="mt-[50px] inline-block">
        <button className="text-white font-rebond text-[24px] tracking-wide border border-white rounded-[60px] px-[37px] py-[25px] flex items-center gap-[10px]">
          Get in touch
          <MdArrowOutward />
        </button>
      </Link>
    </section>
  );
};

export default CTA;
