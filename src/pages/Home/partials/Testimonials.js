import UserImg1 from  '../../../assets/images/user1.avif';
import UserImg2 from  '../../../assets/images/user2.avif';
import UserImg3 from  '../../../assets/images/user3.avif';

export default function Testimonilas() {
  return (
    <section className="section" id="testimonial">
      <div className="d-flex flex-column flex-md-row">
        <div className="testimonial-left bg-primary-right">
          <div className="testimonial-highlight">
            <h2 className="section-heading">Our Clients Say</h2>
            <button
              className="app-btn btn-rounded app-btn-outline-primary"
              style={{ borderRadius: "30px" }}
            >
              View All Stories
            </button>
          </div>
        </div>
        <div className="testimonial-right d-flex justify-content-center flex-column">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className='section-content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                eligendi ratione veniam consequatur
              </p>
            </div>
            <div className="testimonial-footer">
              <div className="client-image">
                <img src={UserImg1} alt="" />
              </div>
              <div className="client-description section-content">
                <span className='d-block'>Jessica Anderson</span>
                <span className='d-block text-muted'>Founder RTC Suppliers</span>

              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className='section-content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                eligendi ratione veniam consequatur
              </p>
            </div>
            <div className="testimonial-footer">
              <div className="client-image">
                <img src={UserImg2} alt="" />
              </div>
              <div className="client-description section-content">
                <span className='d-block'>Jessica Anderson</span>
                <span className='d-block text-muted'>Founder RTC Suppliers</span>

              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className='section-content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                eligendi ratione veniam consequatur
              </p>
            </div>
            <div className="testimonial-footer">
              <div className="client-image">
                <img src={UserImg3} alt="" />
              </div>
              <div className="client-description section-content">
                <span className='d-block'>Jessica Anderson</span>
                <span className='d-block text-muted'>Founder RTC Suppliers</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
