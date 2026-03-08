import CTA from "../components/homepage/CTA";
import Header from "../components/homepage/Header";
import Methodology from "../components/homepage/Methodology";
import OtherProjects from "../components/homepage/OtherProjects";
import Projects from "../components/homepage/Projects";
import SidebarInfo from "../components/SidebarInfo";

export default function Home() {
  return (
    <main>
      <section className="flex items-start gap-5 border-[0.5px] border-white/20">
        <SidebarInfo />
        <div className="flex-1 py-[100px] relative overflow-hidden border-l-[0.5px] border-white/20">
          <div className="max-w-[900px] mx-auto">
            <Header />
            <Methodology />
            <Projects />
            <OtherProjects />
            <CTA />
          </div>
        </div>
      </section>
    </main>
  );
}
