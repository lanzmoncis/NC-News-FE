import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li>
      <Link to={`/article/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Description: {article.body}</p>
    </li>
  );
}

export default ArticleCard;
