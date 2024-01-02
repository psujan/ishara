import useScrollingUp from "../../hooks/useScrollingUp";
import ContactBtn from "./partials/ContactBtn";
import HeaderMenu from "./partials/HeaderMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const scrolled = useScrollingUp();
  const [menuState, setMenuState] = useState(false);

  const handlleMobileMenu = (state) => {
    setMenuState(state);
  };

  return (
    <header className={`header   ${scrolled ? "header-shadow" : ""}`}>
      <div className="container h-100">
        <div className="h-100 d-flex justify-content-between align-items-center">
          <div className="app-logo">
            <Link to="/"><span>Ishara</span></Link>
          </div>
          <nav className="header-menu d-flex align-items-center">
            <HeaderMenu></HeaderMenu>
          </nav>
          <ContactBtn />
          <span
            className="mobile-menu-icon"
            onClick={() => handlleMobileMenu(true)}
          >
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
      <div
        className={`mobile-menu-wrap ${menuState ? "is-opened" : "is-closed"}`}
      >
        <div className="mobile-header-menu">
          <span
            className="d-inline-block mobile-menu-close"
            onClick={() => handlleMobileMenu(false)}
          >
            <i className="ri-close-line"></i>
          </span>
          <HeaderMenu appendClass={"flex-column"} />
          <ContactBtn id={"contact-btn-mobile"} className="ms-2" />
        </div>
      </div>
    </header>
  );
}
