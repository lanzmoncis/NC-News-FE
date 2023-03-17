import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./article-card";
import styles from "../styles/article-card.module.css";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getArticles(sortBy, order).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [sortBy, order]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>What's new</h2>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
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
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ArticleList;
