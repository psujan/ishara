import Logo from "../../assets/images/Ishara.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 newsletter text-center">
              <h2 className="section-heading">Join Our Newsletter</h2>
              <p className="text-muted mb-3">
                Sign up to stay updated with the latest insights, news, and
                more.
              </p>
              <form action="" className="d-flex pt-2">
                <input
                  type="text"
                  placeholder="Your Email Address..."
                  className="form-control newsletter-input"
                />
                <button className="btn-newsletter">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section-gray py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 footer-col">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <ul className="footer-link">
                <li>
                  <span>
                    <i className="ri-phone-line pe-2"></i>98562314789
                  </span>
                </li>
                <li>
                  <span>
                    <i className="ri-map-pin-line pe-2"></i>93 Sussex St, Sydney
                    , NSW
                  </span>
                </li>
                <li>
                  <span>
                    <i className="ri-mail-line pe-2"></i>mailtoishara@hotmail.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer-col">
              <h4>Services</h4>
              <ul className="footer-link">
                <li>
                  <a href="/">Web Development</a>
                </li>
                <li>
                  <a href="/">Mobile App Development</a>
                </li>
                <li>
                  <a href="/">Digital Branding</a>
                </li>
                <li>
                  <a href="/">Cloud Hosting & Management</a>
                </li>
                <li>
                  <a href="/">Ecommerce Solutions</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer-col">
              <h4>Useful Links</h4>
              <ul className="footer-link">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Portfolio</a>
                </li>
                <li>
                  <a href="/">Terms & Policy</a>
                </li>
                <li>
                  <a href="/">Business & Work Culture</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer-col">
              <h4>Find Us</h4>
              <ul className="footer-link find-us d-inline-flex">
                <li>
                  <a href="/">
                    <i className="ri-facebook-circle-line px-2"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ri-linkedin-line px-2"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="ri-twitter-line px-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
