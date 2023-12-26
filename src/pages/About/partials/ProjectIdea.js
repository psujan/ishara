import ProjectStepsAccordion from "./components/ProjectStepsAccordion";

export default function ProjectIdea() {
  return (
    <section className="section section-gradient">
      <div className="container">
        <h2 className="section-heading text-center">Got A Project ?</h2>
        <div className="row g-5">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-3 bg-white rounded">
            <form class="row g-3 p-4">
              <div class="col-md-6">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="col-md-6">
                <label for="phn" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="phn"
                  inputMode="numeric"
                  placeholder="Your Phone Number"
                />
              </div>
              <div class="col-md-12">
                <label for="email-your" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="email-your"
                  placeholder="Your Email"
                />
              </div>
              <div class="col-md-12">
                <label for="p-detail" class="form-label">
                  Project Detail
                </label>
                <textarea
                  class="form-control shadow-none"
                  id="p-detail"
                  placeholder="Please provide a short project detail"
                />
              </div>

              <div class="col-12 mt-4">
                <button type="submit" class="app-btn app-btn-primary">
                  Submit Request <i className="ri ri-arrow-right-line"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 next-step-col">
            <h5 className="fs-5 mb-4 fw-bold">Next Steps ...</h5>
            <ul class="next-steps">
              <li className="lh-content">
                We will reach out to you within 24 hrs to book a free
                consultatin
              </li>
              <li className="lh-content">
                We will conduct meetup as per your convinence to understand your
                concern and requirements
              </li>
              <li className="lh-content">
                We will provide you with informal estimates and timelines which
                may be subjected to changes further
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
