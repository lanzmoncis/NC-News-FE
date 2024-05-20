import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setSingleArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <div className="mx-auto lg:px-8 lg:w-3/5">
      {isLoading ? (
        <p className="hidden">Loading...</p>
      ) : (
        <div className="space-y-2">
          <div className="mb-8">
            <div className="mb-4 text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-4xl">
                {singleArticle.title}
              </h2>
              <p className="mb-1 text-sm text-gray-500 md:text-base">
                <em>
                  Posted by <strong>{singleArticle.author}</strong> on{" "}
                  {formatDate(singleArticle.created_at)}
                </em>
              </p>
            </div>
            <img
              src={singleArticle.article_img_url}
              alt={singleArticle.title}
              className="mx-auto"
            />
          </div>
          <div className="space-y-8 font-serif text-gray-900 text-base/loose md:text-lg/loose text-wrap">
            <p>{singleArticle.body}</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate accusamus doloremque nulla quam. Eveniet quis incidunt
              obcaecati officiis, reiciendis, recusandae itaque dolorum nisi
              assumenda mollitia blanditiis! Esse exercitationem nulla maiores
              vero beatae. Perspiciatis accusamus nemo dolorum quasi, optio
              illum vel!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              impedit debitis eaque eos. Reprehenderit vitae adipisci sapiente
              minus perferendis? Itaque rerum doloribus temporibus! Numquam,
              provident? Voluptates odit ducimus ab explicabo?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              qui at ad iusto porro, eos suscipit nisi similique corporis quasi.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleArticle;
