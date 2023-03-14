import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li>
      <Link to={`/article/${article.article_id}`}>
        <div>Title: {article.title}</div>
      </Link>
      <div>Topic: {article.topic}</div>
      <div>Author: {article.author}</div>
      <div>Description: {article.body}</div>
    </li>
  );
}

export default ArticleCard;
