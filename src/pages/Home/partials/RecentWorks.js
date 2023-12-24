import DemoImg1 from "../../../assets/images/demo-work1.jpg";
import DemoImg2 from "../../../assets/images/demo-work2.jpg";
import DemoImg3 from "../../../assets/images/demo-work3.jpg";
import DemoImg4 from "../../../assets/images/demo-work4.jpg";
import DemoImg5 from "../../../assets/images/demo-work7.png";
import DemoImg6 from "../../../assets/images/demo-work6.png";

const images = [DemoImg1, DemoImg2, DemoImg3, DemoImg4, DemoImg5, DemoImg6];
export default function RecentWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center section-heading">Our Recent Works</h2>

        <p
          className="section-content pt-2 text-center mb-5"
          style={{ maxWidth: "70%", margin: "0 auto" }}
        >
          We have been fortunate enough to work with some truly amazing clients
          over the years. These individuals have had extraordinary vision and a
          clear sense of purpose, which has perfectly aligned with our own
          values and goals as a company.
        </p>

        <div className="row">
          {images.map((img, i) => (
            <div className="col-12 col-sm-4 mb-4" key={i}>
              <div className="recent-work-wrap">
                <img src={img} alt="" className="w-100 h-100" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <button
            className="btn  btn-outline-primary"
            style={{ minWidth: "180px" }}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
