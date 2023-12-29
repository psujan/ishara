import { Link } from "react-router-dom";
import BlogImg1 from "../../../assets/images/blog1.jpg";
import BlogImg2 from "../../../assets/images/blog2.jpg";
import BlogImg3 from "../../../assets/images/blog3.jpg";

export default function FeaturedBlog() {
  return (
    <div className="col-sm-12 col-md-12 col-lg-8 mb-3">
      <div className="featured-blog">
        <div className="blog-image">
          <img src={BlogImg1} alt="" className="img-fluid" />
        </div>
        <div className="blog-desc">
          <h2 className="section-heading pt-4">
            A RoadMap To Mobile App Development
          </h2>
          <p className="section-content">
            The number of mobile apps has been increasing for a long time. This
            part of software development is all about making apps that can be
            used on mobile devices .Different operating systems, like iOS and
            Android, need different kinds of apps ....
          </p>
          <div className="pt-2">
            <Link to="/blog/detail" className="text-muted read-more-link">
              <span>Read More</span>
              <i className="ri ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="featured-blog">
        <div className="blog-image">
          <img src={BlogImg3} alt="" className="img-fluid" />
        </div>
        <div className="blog-desc">
          <h2 className="section-heading pt-4">
            Cloud Scalability For Small And Medium Sized Business
          </h2>
          <p className="section-content">
            Cloud scalability in cloud computing refers to the ability to
            increase or decrease IT resources as needed to meet changing demand.
            Scalability is one of the hallmarks of the cloud and the primary
            driver of its exploding popularity with businesses ....
          </p>
          <div className="pt-2">
            <Link to="/blog/detail" className="text-muted read-more-link">
              <span>Read More</span>
              <i className="ri ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="featured-blog">
        <div className="blog-image">
          <img src={BlogImg2} alt="" className="img-fluid" />
        </div>
        <div className="blog-desc">
          <h2 className="section-heading pt-4">
            Utilizing Digital Marketing To Expand Your Audinces Correctly
          </h2>
          <p className="section-content">
            Businesses leverage digital channels such as search engines, social
            media, email, and other websites to connect with current and
            prospective customers. ....
          </p>
          <div className="pt-2">
            <Link to="/blog/detail" className="text-muted read-more-link">
              <span>Read More</span>
              <i className="ri ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
