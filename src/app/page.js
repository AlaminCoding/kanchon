import About from "../components/homepage/About";
import Clients from "../components/homepage/Clients";
import Contact from "../components/homepage/Contact";
import Footer from "../components/homepage/Footer";
import Header from "../components/homepage/Header";
import Methodology from "../components/homepage/Methodology";
import OtherProjects from "../components/homepage/OtherProjects";
import Projects from "../components/homepage/Projects";
import SidebarInfo from "../components/SidebarInfo";
import MobileNavbar from "@/components/homepage/MobileNavbar";

export default function Home() {
  return (
    <main className="bg-black">
      <MobileNavbar />
      <section className="flex items-start gap-5 min-[992px]:border-[0.5px] min-[992px]:border-white/20">
        <SidebarInfo />
        <div className="flex-1 relative overflow-hidden min-[992px]:border-l-[0.5px] min-[992px]:border-white/20">
          <Header />
          <Clients />
          <Methodology />
          <div className="home-container">
            <Projects />
            <OtherProjects />
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
