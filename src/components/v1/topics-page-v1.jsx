// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getArticlesByTopic } from "../api";
// // import styles from "../styles/topics-page.module.css";
// // import linkStyle from "../styles/link-style.module.css";

// function TopicPage() {
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { topic } = useParams();

//   // const [sortBy, setSortBy] = useState("created_at");
//   // const [order, setOrder] = useState("desc");

//   useEffect(() => {
//     getArticlesByTopic(topic).then((data) => {
//       setArticles(data);
//       setIsLoading(false);
//     });
//   }, [topic]);

//   // const handleSortChange = (event) => {
//   //   setSortBy(event.target.value);
//   // };

//   // const handleOrderChange = (event) => {
//   //   setOrder(event.target.value);
//   // };

//   return (
//     <div>
//       <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)} Articles</h2>
//       {/* <select value={sortBy} onChange={handleSortChange}>
//         <option value="created_at">Date</option>
//         <option value="author">Author</option>
//         <option value="votes">Votes</option>
//       </select>
//       <select value={order} onChange={handleOrderChange}>
//         <option value="asc">Ascending</option>
//         <option value="desc">Descending</option>
//       </select> */}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className="grid grid-cols-3 mb-12 gap-14">
//           {articles.map((article) => (
//             <li key={article.article_id}>
//               <div className="transition rounded-md hover:shadow-md">
//                 <div className="size-auto">
//                   <img
//                     src={article.article_img_url}
//                     alt={article.title}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <Link to={`/article/${article.article_id}`}>
//                     <h3 className="text-lg font-medium text-gray-900">
//                       {article.title}
//                     </h3>
//                   </Link>
//                   {/* <p>Topic: {article.topic}</p>
//           <p>Author: {article.author}</p> */}
//                   <p className="mt-2 text-gray-500 text-sm/relaxed line-clamp-3">
//                     {article.body}
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default TopicPage;
