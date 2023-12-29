import Blogcover1 from "../../../assets/images/blog4.jpg";
import Blogcover2 from "../../../assets/images/blog5.png";

import { Link } from "react-router-dom";
export default function AdditionalBlog() {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 mb-3 py-4">
      <div className="ps-0 ps-lg-5">
        <h2 className="section-heading fs-5">Explore More</h2>
        <div className="blog-card-cover">
          <div className="blog-cover-img">
            <img src={Blogcover1} alt="" className="img-fluid" />
          </div>
          <div className="blog-cover-desc">
            <Link to="/blog/detail">
              <h5>Securing Backend Services Of Application</h5>
            </Link>
            <div className="blog-tags mt-3">
              <a href={() => false}>#Security</a>
              <a href={() => false}>#Backend</a>
            </div>
          </div>
        </div>
        <div className="blog-card-cover">
          <div className="blog-cover-img">
            <img src={Blogcover2} alt="" className="img-fluid" />
          </div>
          <div className="blog-cover-desc">
            <Link to="/blog/detail">
              <h5>Where to focus UI VS UX ?</h5>
            </Link>
            <div className="blog-tags mt-3">
              <a href={() => false}>#UX Research</a>
              <a href={() => false}>#UI</a>
              <a href={() => false}>#Design</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
