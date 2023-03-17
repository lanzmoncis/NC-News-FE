import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, patchArticleVote } from "../api";
import Comments from "./comments";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState([]);
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  let { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setSingleArticle(data);
      setVotes(data.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVote = () => {
    setVotes((currentVote) => currentVote + 1);

    patchArticleVote(singleArticle.article_id).catch(() => {
      setVotes((currentVote) => currentVote - 1);
    });
  };

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
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{singleArticle.title}</h2>
          <p>
            <em>
              Posted by <strong>{singleArticle.author}</strong> on{" "}
              {formatDate(singleArticle.created_at)}
            </em>
          </p>
          <img src={singleArticle.article_img_url} alt={singleArticle.title} />
          <p>Votes: {votes}</p>
          <button onClick={handleVote}>LIKE</button>
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
          <Comments articleId={article_id} />
        </div>
      )}
    </>
  );
}

export default SingleArticle;
