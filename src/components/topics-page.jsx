import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import styles from "../styles/topics-page.module.css";
import linkStyle from "../styles/link-style.module.css";

function TopicPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic, sortBy, order).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)} Articles</h2>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
      </select>
      <select value={order} onChange={handleOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.article_id}>
              <Link
                to={`/article/${article.article_id}`}
                className={linkStyle.link}
              >
                <h3>{article.title}</h3>
              </Link>
              <p>Author: {article.author}</p>
              <p>Description: {article.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopicPage;
