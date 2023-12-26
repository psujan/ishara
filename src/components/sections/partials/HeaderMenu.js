import { Link } from "react-router-dom";

export default function HeaderMenu({ appendClass }) {
  return (
    <ul
      className={`d-flex align-items-center ${appendClass}`}
      id="header-menu-items"
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  );
}
