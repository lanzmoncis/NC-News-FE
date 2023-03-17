import { Link } from "react-router-dom";
import styles from "../styles/link-style.module.css";

function Header() {
  return (
    <Link to="/">
      <h1 className={styles.link}>NC-News</h1>
    </Link>
  );
}

export default Header;
