import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getArticleComments } from "../api";
import Comments from "./comments";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setSingleArticle(data);
      setIsLoading(false);
    });
    getArticleComments(article_id).then((data) => {
      setComments(data);
    });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{singleArticle.title}</h2>
          <p>Author: {singleArticle.author}</p>
          <p>Topic: {singleArticle.topic}</p>
          <p>Created at: {singleArticle.created_at}</p>
          <img src={singleArticle.article_img_url} alt={singleArticle.title} />
          <p>{singleArticle.body}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra varius massa blandit mollis. Curabitur dignissim accumsan
            sem, nec condimentum tortor mollis at. Nunc non eros non eros
            lacinia auctor. Donec vulputate ipsum a quam feugiat maximus.
            Maecenas sagittis interdum consequat. Aliquam vehicula porttitor
            accumsan. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nullam ut mauris ac libero
            pretium condimentum at ut magna. Suspendisse libero lacus, volutpat
            id consectetur sed, iaculis at lorem. Ut congue ultrices risus a
            viverra.
          </p>
          <Comments comments={comments} />
        </>
      )}
    </>
  );
}

export default SingleArticle;
