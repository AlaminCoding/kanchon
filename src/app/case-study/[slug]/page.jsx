import CaseHeader from "@/components/case-study/header";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
const CaseStudyDetails = () => {
  return (
    <section className="px-[100px] py-[50px] bg-[#1B1B1F]">
      <div className="w-full h-screen bg-white relative">
        <Link href="/">
          <AiOutlineClose className="absolute top-5 right-5 text-3xl cursor-pointer" />
        </Link>
        <CaseHeader />
      </div>
    </section>
  );
};

export default CaseStudyDetails;
