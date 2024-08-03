import CTA from "./components/homepage/CTA";
import Header from "./components/homepage/Header";
import Methodology from "./components/homepage/Methodology";
import OtherProjects from "./components/homepage/OtherProjects";
import Projects from "./components/homepage/Projects";
import SidebarInfo from "./components/SidebarInfo";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1300px] mx-[auto] py-[190px] px-[20px] flex gap-[10%] items-start">
        <SidebarInfo />
        <div className="flex-1">
          <Header />
          <Methodology />
          <Projects />
          <OtherProjects />
          <CTA />
        </div>
      </section>
    </main>
  );
}
