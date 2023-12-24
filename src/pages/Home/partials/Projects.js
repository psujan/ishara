import Image1 from "../../../assets/images/projectimg1.jpg";
import Image2 from "../../../assets/images/projectimg2.jpg";
import Image3 from "../../../assets/images/projectimg3.png";


import SimpleImageSlider from "react-simple-image-slider";
const images = [{ url: Image1 }, { url: Image2 }, { url: Image3 }];

export default function Projects() {

  const handleCompleteSlide = ()=>{
    console.log('slide completed')
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row position-relative">
          <div className="col-12 col-sm-6">
            <div className="project-card">
              <h2 className="section-heading">
                Leveraging The Power Of Mobile App
              </h2>
              <div className="mb-4 mt-3">
                <p className="section-content mb-3">
                  Discover how our mobile apps for multiple platforms
                  transformed Australian Community Media, revolutionising how
                  the rural press is accessed and consumed.
                </p>
                <p className="section-content">
                  Continue reading to learn all about the key features of our
                  mobile app that made internship reporting seamless and
                  effective for students and teachers across NSW.
                </p>
              </div>
              <a href="/" className="find-more-btn d-inline-block">
                Find More<i className="ri-arrow-right-line ps-2"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 project-col d-flex justify-content-end">
            <div className="project-image-wrap">
              <div className="circle">
                <div className="project-img">
                  {/* <img src={App1} alt="" /> */}
                  <SimpleImageSlider
                    width={320}
                    height={250}
                    images={images}
                    showBullets={false}
                    showNavs={false}
                    autoPlay={true}
                    onCompleteSlide={()=>handleCompleteSlide()}
                    bgColor="#fff"
                  />
                </div>
                <div className="animate-circle1"></div>
                <div className="animate-circle2"></div>
                <div className="animate-circle3"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
