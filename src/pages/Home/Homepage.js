import HeroSection from "./partials/HeroSection";
import Services from "./partials/Services";
import Projects from "./partials/Projects";
import GetStarted from "./partials/GetStarted";
import RecentWorks from "./partials/RecentWorks";
import Testimonilas from "./partials/Testimonials";
import PageLayout from "../../components/layouts/PageLayout";

export default function Homepage() {
  return (
    <>
      <PageLayout>
        <HeroSection />
        <Services />
        <Projects />
        <GetStarted />
        <RecentWorks />
        <Testimonilas />
      </PageLayout>
    </>
  );
}
