import { Link } from "react-router-dom";
import { formatDate } from "../utils/date-formatter";

function ArticleCard({ article }) {
  return (
    <li>
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
          <p className="mt-2 mb-4 font-serif text-gray-500 text-sm/relaxed line-clamp-3">
            {article.body}
          </p>
        </div>
      </div>
    </li>
  );
}

export default ArticleCard;
