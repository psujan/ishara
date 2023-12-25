import GetStartedAccordion from "./components/GetStartedAccordion";
// import GetStartedImg from "../../../assets/images/get-started.png";

export default function GetStarted() {
  return (
    <section className="section section-gray">
      <div className="container">
        <h2 className="text-center section-heading">We help You Get Started</h2>
        <div className="row pt-4">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-sm-4 mb-lg-0">
            <p className="lh-content">
              Got an businees idea or need any IT solutions for your ongoing
              business ? We are everready to help you get started{" "}
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-sm-12 col-lg-6 mb-sm-4 mb-lg-0 accordion-col">
            <GetStartedAccordion />
          </div>
          <div className="col-sm-12 col-lg-6 get-started-col">
            {/* <div className="get-started-img">
              <img src={GetStartedImg} alt="" className="img-fluid" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
