import { useEffect, useState } from "react";
import getArticles from "../api";
import ArticleCard from "./article-card";

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
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </>
  );
}

export default ArticleList;
