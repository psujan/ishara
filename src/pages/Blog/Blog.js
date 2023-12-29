import PageLayout from "../../components/layouts/PageLayout";
import AdditionalBlog from "./partials/AdditionalBlog";
import FeaturedBlog from "./partials/FeaturedBlog";

export default function Blog() {
  return (
    <PageLayout>
      <section className="section section-gray">
        <div className="container">
          <div className="row">
            <FeaturedBlog />
            <AdditionalBlog />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
