import CTA from "../components/homepage/CTA";
import Header from "../components/homepage/Header";
import Methodology from "../components/homepage/Methodology";
import OtherProjects from "../components/homepage/OtherProjects";
import Projects from "../components/homepage/Projects";
import Wave from "../components/homepage/wave";
import SidebarInfo from "../components/SidebarInfo";

export default function Home() {
  return (
    <main>
      <section className="pb-[190px] flex items-start">
        <SidebarInfo />
        <div className="flex-1 pt-[160px] relative overflow-hidden">
          <Wave />
          <div className="max-w-[810px] mx-auto">
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
