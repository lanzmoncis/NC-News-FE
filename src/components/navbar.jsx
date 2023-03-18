import { Link } from "react-router-dom";
import styles from "../styles/link-style.module.css";

function Navbar() {
  const user =
    "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953";
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
      <Link to="/" className={styles.link}>
        <li>
          <img src={user} alt="user" className={styles.userIcon} />
        </li>
      </Link>
    </ul>
  );
}

export default Navbar;
