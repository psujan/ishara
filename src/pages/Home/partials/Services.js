import ServiceCard from "./components/ServiceCard";
import { ServiceCardData } from "../../../data/servicecard";

export default function Services() {
  return (
    <section className="section section-gray" id="services-section">
      <div className="container">
        <h2 className="text-center section-heading">Our Services</h2>
        <div className="row">
          {ServiceCardData.map((row, i) => (
            <ServiceCard
              key={i}
              title={row.title}
              iconClass={row.iconClass}
              content={row.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
