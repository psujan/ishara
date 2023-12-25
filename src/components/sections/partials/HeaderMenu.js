export default function HeaderMenu({appendClass}) {
  return (
    <ul className={`d-flex align-items-center ${appendClass}`} id="header-menu-items">
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
  );
}
