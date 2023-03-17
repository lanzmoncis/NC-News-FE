import { Link } from "react-router-dom";
import styles from "../styles/link-style.module.css";

function ArticleCard({ article }) {
  return (
    <li>
      <Link to={`/article/${article.article_id}`} className={styles.link}>
        <h3>{article.title}</h3>
      </Link>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Description: {article.body}</p>
    </li>
  );
}

export default ArticleCard;
