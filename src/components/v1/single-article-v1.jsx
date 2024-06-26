// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getSingleArticle, patchArticleVote } from "../api";
// import Comments from "./comments";

// function SingleArticle() {
//   const [singleArticle, setSingleArticle] = useState([]);
//   const [votes, setVotes] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   let { article_id } = useParams();

//   useEffect(() => {
//     getSingleArticle(article_id).then((data) => {
//       setSingleArticle(data);
//       setVotes(data.votes);
//       setIsLoading(false);
//     });
//   }, [article_id]);

//   const handleVote = () => {
//     setVotes((currentVote) => currentVote + 1);

//     patchArticleVote(singleArticle.article_id).catch(() => {
//       setVotes((currentVote) => currentVote - 1);
//     });
//   };

//   function formatDate(dateString) {
//     const dateObj = new Date(dateString);
//     return dateObj.toLocaleString("en-US", {
//       month: "long",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   }

//   return (
//     <>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h2>{singleArticle.title}</h2>
//           <p>
//             <em>
//               Posted by <strong>{singleArticle.author}</strong> on{" "}
//               {formatDate(singleArticle.created_at)}
//             </em>
//           </p>
//           <img src={singleArticle.article_img_url} alt={singleArticle.title} />
//           <p>
//             <strong>Votes:</strong> {votes}
//           </p>
//           <button onClick={handleVote}>LIKE</button>
//           <p>{singleArticle.body}</p>
//           <Comments articleId={article_id} />
//         </div>
//       )}
//     </>
//   );
// }

// export default SingleArticle;
