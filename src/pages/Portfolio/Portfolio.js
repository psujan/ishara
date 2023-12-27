import PageLayout from "../../components/layouts/PageLayout";
import PortfolioContainer from "./partials/PortfolioContainer";
import PortfolioHeader from "./partials/PortfolioHeader";

export default function Portfolio() {
  return (
    <PageLayout>
      <PortfolioHeader />
      <PortfolioContainer />
    </PageLayout>
  );
}
