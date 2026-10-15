import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import PageWrapper from "./components/layout/PageWrapper.jsx";
import Hero from "./components/sections/Hero.jsx";
import Stats from "./components/sections/Stats.jsx";
import Services from "./components/sections/Services.jsx";
import Work from "./components/sections/Work.jsx";
import Process from "./components/sections/Process.jsx";
import About from "./components/sections/About.jsx";
import Technologies from "./components/sections/Technologies.jsx";
import CTA from "./components/sections/CTA.jsx";
import Contact from "./components/sections/Contact.jsx";
import Loader from "./components/animations/Loader.jsx";
import CustomCursor from "./components/animations/CustomCursor.jsx";
import ScrollProgress from "./components/animations/ScrollProgress.jsx";
import SmoothScroll from "./components/animations/SmoothScroll.jsx";

export default function App() {
  return (
    <div className="noise">
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <PageWrapper>
        <Hero />
        <Stats />
        <Services />
        <Work />
        <Process />
        <About />
        <Technologies />
        <CTA />
        <Contact />
      </PageWrapper>
      <Footer />
    </div>
  );
}
