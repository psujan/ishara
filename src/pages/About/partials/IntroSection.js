import AboutImage from "../../../assets/images/aboutus.png";
export default function IntroSection() {
  return (
    <section className="section section-gray">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-3 mb-lg-0">
            <h2 className="section-heading">
              Helping Business Succed By Digital Medium
            </h2>
            <p className="section-content mb-2">
              We are a team of software engineers , designers and digital
              strategist focused on creating solutions that helps business
              organization reach to its fullest potential.
            </p>
            <p className="section-content">
              We primarily develop software solutions required by business and
              nurture them so our potential users can fully benefit from them
              and focus on their activities while leaving the digital hasle to
              be responsibly handled by us.
            </p>
            <div className="mt-4">
              <button className="app-btn app-btn-outline-primary">
                Schedule A Consultation
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 justify-content-center mb-3 mb-lg-0">
            <img src={AboutImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
