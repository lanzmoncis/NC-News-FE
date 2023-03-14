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
          <p>
            Nunc rhoncus elit neque, non accumsan lorem mattis non. Donec et
            aliquet purus, vitae consequat turpis. Quisque ullamcorper, felis a
            sagittis dignissim, lacus purus elementum massa, vel sagittis mauris
            tortor sit amet tellus. Nunc facilisis nibh ut pulvinar commodo.
            Vivamus pharetra dolor enim, vel commodo lorem dignissim et. Morbi
            egestas rhoncus rutrum. Aenean placerat dapibus sem, at malesuada
            arcu placerat eu. Curabitur finibus dui sit amet nisl iaculis, non
            suscipit felis porttitor. Sed blandit libero facilisis, placerat est
            at, laoreet odio. Aliquam erat volutpat. Nam nec dapibus velit.
            Proin tempus lectus nec velit mollis varius.
          </p>
        </>
      )}
    </>
  );
}

export default SingleArticle;
