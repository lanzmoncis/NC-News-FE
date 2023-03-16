import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./article-card";
import styles from "../styles/article-card.module.css";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>What's new</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.list}>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ArticleList;
