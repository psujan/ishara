import Header from "../../components/sections/Header";
import HeroSection from "./partials/HeroSection";
import Services from "./partials/Services";
import Projects from "./partials/Projects";
import GetStarted from "./partials/GetStarted";
import RecentWorks from "./partials/RecentWorks";
import Testimonilas from "./partials/Testimonials";
import Footer from "../../components/sections/Footer";

export default function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <GetStarted />
      <RecentWorks />
      <Testimonilas />
      <Footer />
    </>
  );
}
