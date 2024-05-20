import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import { formatDate } from "../utils/date-formatter";
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
    <div className="container">
      {isLoading ? (
        <p className="hidden">Loading...</p>
      ) : (
        <>
          <h2 className="mb-6 text-2xl font-bold">Top picks</h2>
          <div className="grid grid-cols-1 gap-4 mb-12 lg:grid-cols-2">
            <div className="transition rounded-md hover:shadow-md">
              <img
                src={articles[28].article_img_url}
                alt={articles[28].title}
                className="object-cover object-center w-full lg:h-56"
              />
              <div className="px-4 py-6">
                <span className="text-sm font-light text-gray-500">
                  {formatDate(articles[28].created_at)}
                </span>
                <Link to={`/article/${articles[28].article_id}`}>
                  <h3 className="mt-0.5 text-xl font-semibold text-gray-900">
                    {articles[28].title}
                  </h3>
                </Link>
                <p className="mt-2 mb-4 font-serif text-gray-500 text-sm/relaxed line-clamp-3 md:text-base/relaxed">
                  {articles[28].body}
                </p>
                <div>
                  <span className="px-2 py-1 text-sm font-light text-gray-700 bg-green-100 rounded-md">
                    {articles[28].topic}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col transition rounded-md sm:flex-row hover:shadow-md">
                <img
                  src={articles[9].article_img_url}
                  alt={articles[9].title}
                  className="object-cover w-full sm:size-52"
                />
                <div className="p-4">
                  <span className="text-sm font-light text-gray-500 sm:text-xs">
                    {formatDate(articles[9].created_at)}
                  </span>
                  <Link to={`/article/${articles[9].article_id}`}>
                    <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mt-0.5">
                      {articles[9].title}
                    </h3>
                  </Link>
                  <p className="mt-2 mb-4 font-serif text-gray-500 text-sm/relaxed line-clamp-3">
                    {articles[9].body}
                  </p>
                  <div>
                    <span className="px-2 py-1 text-sm font-light text-gray-700 bg-yellow-100 rounded-md sm:text-xs">
                      {articles[9].topic}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col transition rounded-md sm:flex-row hover:shadow-md">
                <img
                  src={articles[11].article_img_url}
                  alt={articles[11].title}
                  className="object-cover w-full sm:size-52"
                />
                <div className="p-4">
                  <span className="text-sm font-light text-gray-500 sm:text-xs">
                    {formatDate(articles[11].created_at)}
                  </span>
                  <Link to={`/article/${articles[11].article_id}`}>
                    <h3 className="text-xl font-semibold text-gray-900 sm:text-lg">
                      {articles[11].title}
                    </h3>
                  </Link>
                  <p className="mt-2 mb-4 font-serif text-gray-500 text-sm/relaxed line-clamp-3">
                    {articles[11].body}
                  </p>
                  <div>
                    <span className="px-2 py-1 text-sm font-light text-gray-700 bg-red-100 rounded-md sm:text-xs">
                      {articles[11].topic}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mb-6 text-2xl font-bold">All article post</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
            {articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default ArticleList;
