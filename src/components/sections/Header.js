import useScrollingUp from "../../hooks/useScrollingUp";

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
            <ul className="d-flex align-items-center">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </nav>
          <div>
            <button className="app-btn app-btn-hover">Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
}
