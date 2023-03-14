import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticles from "../api";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { article_id } = useParams();

  console.log(typeof article_id);

  useEffect(() => {
    getArticles().then((data) => {
      const article = data.find((id) => id.article_id === parseInt(article_id));
      setSingleArticle(article);
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
          <p>
            Pellentesque vitae orci orci. Phasellus maximus ligula nec massa
            facilisis convallis. Donec porttitor convallis diam, nec hendrerit
            turpis convallis at. Suspendisse dictum, tellus nec vulputate
            venenatis, odio elit vestibulum massa, eu tincidunt sem urna eu
            ante. Nulla facilisi. Mauris tempus diam in lacus ultrices
            pellentesque. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Integer pharetra ligula ut
            arcu pellentesque pretium. Mauris ac lacinia elit. Etiam eu egestas
            erat, non porta nisi. Pellentesque sagittis enim vitae ultrices
            bibendum. Duis non metus nulla. Pellentesque vitae sagittis ligula,
            eu tincidunt purus. Quisque lectus libero, volutpat vitae enim
            aliquam, sollicitudin ornare lorem. Vestibulum lacus velit,
            facilisis vitae nisl vel, suscipit viverra est. Cras et est
            venenatis, molestie diam id, maximus sem.{" "}
          </p>
        </>
      )}
    </>
  );
}

export default SingleArticle;
