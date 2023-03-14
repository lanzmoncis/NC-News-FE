function ArticleCard({ article }) {
  return (
    <li>
      <div>Title: {article.title}</div>
      <div>Topic: {article.topic}</div>
      <div>Author: {article.author}</div>
      <div>Description: {article.body}</div>
    </li>
  );
}

export default ArticleCard;
