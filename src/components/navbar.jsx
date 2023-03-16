import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <Link to="/articles/coding">
        <li>Coding</li>
      </Link>
      <Link to="/articles/cooking">
        <li>Cooking</li>
      </Link>
      <Link to="/articles/football">
        <li>Football</li>
      </Link>
    </ul>
  );
}

export default Navbar;
