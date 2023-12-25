export default function ServiceCard({ title, iconClass, content }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="service-card bg-white">
        <div className="service-card-head">
          <h3>
            <i className={iconClass}></i>
            <span>{title}</span>
          </h3>
        </div>
        <div className="service-card-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
