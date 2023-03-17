import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import styles from "../styles/topics-page.module.css";

function TopicPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);

  return (
    <div>
      <h1>{topic.charAt(0).toUpperCase() + topic.slice(1)} Articles</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
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
