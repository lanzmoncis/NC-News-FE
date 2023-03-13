import { useEffect, useState } from "react";
import getArticles from "../api";

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
          return (
            <li key={article.article_id}>
              <div>Title:{article.title}</div>
              <div>Topic:{article.topic}</div>
              <div>Author:{article.author}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
