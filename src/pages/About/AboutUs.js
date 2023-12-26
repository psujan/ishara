import PageLayout from "../../components/layouts/PageLayout";
import AboutMethod from "./partials/AboutMethod";
import AboutValues from "./partials/AboutValues";
import IntroSection from "./partials/IntroSection";
import ProjectIdea from "./partials/ProjectIdea";

export default function AboutUs() {
  return (
    <PageLayout>
      <IntroSection />
      <AboutMethod />
      <AboutValues />
      <ProjectIdea />
    </PageLayout>
  );
}
