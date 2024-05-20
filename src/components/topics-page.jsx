import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import { formatDate } from "../utils/date-formatter";

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
      <h2 className="mb-6 text-2xl font-bold">
        {topic.charAt(0).toUpperCase() + topic.slice(1)} Articles
      </h2>
      {isLoading ? (
        <p className="hidden">Loading...</p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
          {articles.map((article) => (
            <li key={article.article_id}>
              <div className="transition rounded-md hover:shadow-md">
                <div className="size-auto">
                  <img
                    src={article.article_img_url}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-light text-gray-500">
                    {formatDate(article.created_at)}
                  </span>
                  <Link to={`/article/${article.article_id}`}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-gray-500 text-sm/relaxed line-clamp-3">
                    {article.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopicPage;
