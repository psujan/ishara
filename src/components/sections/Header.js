import useScrollingUp from "../../hooks/useScrollingUp";
import HeaderMenu from "./partials/HeaderMenu";

export default function Header() {
  const scrolled = useScrollingUp();
  console.log("scroll", scrolled);
  return (
    <header className={`header   ${scrolled ? "header-shadow" : ""}`}>
      <div className="container h-100">
        <div className="h-100 d-flex justify-content-between align-items-center">
          <div className="app-logo">
            <span>Ishara</span>
          </div>
          <nav className="header-menu d-flex align-items-center">
            <HeaderMenu></HeaderMenu>
          </nav>
          <div id="contact-btn">
            <button className="app-btn app-btn-hover">Contact Us</button>
          </div>
          <div className="mobile-header">
            <span className="mobile-menu-icon">
              <i className="ri-menu-line"></i>
            </span>
            <div className="mobile-header-menu">
              <span className="d-inline-block mobile-menu-close">
                <i className="ri-close-line"></i>
              </span>
              <HeaderMenu appendClass={"flex-column"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
