import { notFound } from "next/navigation";
import BackBar from "@/components/case-study/back-bar";
import { CaseStudies } from "@/components/case-study/case-study.data";
import CaseFeatures from "@/components/case-study/features";
import CaseFooter from "@/components/case-study/footer";
import CaseHero from "@/components/case-study/hero";
import InfoStrip from "@/components/case-study/info-strip";
import CaseMetrics from "@/components/case-study/metrics";
import CaseProcess from "@/components/case-study/process";
import ScreensMarquee from "@/components/case-study/screens-marquee";

export function generateStaticParams() {
  return Object.keys(CaseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = CaseStudies[slug];
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.hero.title} — UX Case Study`,
    description: caseStudy.hero.overview,
  };
}

const CaseStudyPage = async ({ params }) => {
  const { slug } = await params;
  const caseStudy = CaseStudies[slug];
  if (!caseStudy) notFound();

  return (
    <main className="bg-[#0c0c0c] text-white font-interTight antialiased overflow-x-hidden">
      <BackBar />
      <CaseHero data={caseStudy.hero} />
      <InfoStrip data={caseStudy.infoStrip} />
      <CaseMetrics data={caseStudy.metrics} />
      <CaseFeatures data={caseStudy.features} />
      <CaseProcess data={caseStudy.process} />
      <ScreensMarquee data={caseStudy.marquee} />
      <CaseFooter data={caseStudy.footer} />
    </main>
  );
};

export default CaseStudyPage;
