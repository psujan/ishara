import HeroImg from '../../../assets/images/hero-img.png'

export default function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="container">
        <div className="row px-4">
          <div className="col-sm-12 col-md-6">
            <div className="hero-head">
              <h1>Your Dedicated IT  Solution</h1>
              <p>
                We provide dedicated IT solutions to your buisness and help you
                reach to your fullest potential.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="hero-img">
              <img src={HeroImg} alt="HERO_IMG" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
