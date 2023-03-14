import { useEffect, useState } from "react";
import getArticles from "../api";
import ArticleCard from "./article-card";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticleList;
