import { Link } from "react-router-dom";
import styles from "../styles/link-style.module.css";

function Navbar() {
  return (
    <ul className="navbar">
      <Link to="/articles/coding" className={styles.link}>
        <li>Coding</li>
      </Link>
      <Link to="/articles/cooking" className={styles.link}>
        <li>Cooking</li>
      </Link>
      <Link to="/articles/football" className={styles.link}>
        <li>Football</li>
      </Link>
    </ul>
  );
}

export default Navbar;
