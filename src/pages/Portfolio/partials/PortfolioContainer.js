import Portfolio1 from "../../../assets/images/portfolio1.png";
import Portfolio2 from "../../../assets/images/portfolio2.png";
import Portfolio3 from "../../../assets/images/portfolio3.png";
import Portfolio4 from "../../../assets/images/portfolio4.png";
import Portfolio5 from "../../../assets/images/portfolio5.jpg";
import Portfolio6 from "../../../assets/images/portfolio6.png";

const PORTFOLIO = [
  {
    img: Portfolio1,
    name: "D-Sports Solutions",
    desc: " E-commerce platform for sporting items",
  },
  {
    img: Portfolio2,
    name: "CDH Dental Services",
    desc: "Management System For Leading Dental Service",
  },
  {
    img: Portfolio3,
    name: "Lanku",
    desc: "App for a famous local style resturant and bar",
  },
  {
    img: Portfolio4,
    name: "Next Education Foundation",
    desc: "Website For Educational Consultancy",
  },
  {
    img: Portfolio5,
    name: "Dolpa",
    desc: "App and Management Platform For Logictics",
  },
  {
    img: Portfolio6,
    name: "Mc Pastry",
    desc: "Ecommerce For a  renowned bakery",
  },
];
export default function PortfolioContainer() {
  return (
    <section className="section section-gray">
      <div className="container">
        <div className="row">
          {PORTFOLIO.map((row) => (
            <div className="col-sm-12 col-md-6  col-lg-4 mb-5">
              <div className="portfolio-card">
                <div
                  className="portfolio-card-img"
                  style={{ backgroundImage: `url(${row.img})` }}
                ></div>
                <div className="portfolio-desc">
                  <h5 className="fw-bold">{row.name}</h5>
                  <p className="text-muted mt-3">{row.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
