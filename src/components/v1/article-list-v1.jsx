// article list with filter sortBy and order

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getArticles } from "../api";
// import ArticleCard from "./article-card";
// // import styles from "../styles/article-card.module.css";

// function ArticleList() {
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // const [sortBy, setSortBy] = useState("created_at");
//   // const [order, setOrder] = useState("desc");

//   useEffect(() => {
//     getArticles().then((data) => {
//       setArticles(data);
//       setIsLoading(false);
//     });
//   }, []);

//   // const handleSortChange = (event) => {
//   //   setSortBy(event.target.value);
//   // };

//   // const handleOrderChange = (event) => {
//   //   setOrder(event.target.value);
//   // };

//   return (
//     <div>
//       {/* <div className="mb-6 space-x-2">
//         <select value={sortBy} onChange={handleSortChange}>
//           <option value="created_at">Date</option>
//           <option value="title">Title</option>
//           <option value="author">Author</option>
//           <option value="votes">Votes</option>
//         </select>
//         <select value={order} onChange={handleOrderChange}>
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div> */}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <h3 className="mb-4 text-2xl font-semibold">Top picks</h3>
//           <div className="grid grid-cols-2 gap-4 mb-12">
//             <div className="transition rounded-md hover:shadow-md">
//               <img
//                 src={articles[28].article_img_url}
//                 alt={articles[28].title}
//                 className="object-cover object-center w-full h-56"
//               />
//               <div className="p-4">
//                 <Link>
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {articles[28].title}
//                   </h3>
//                 </Link>
//                 <p className="mt-2 text-gray-500 line-clamp-3 text-md/relaxed">
//                   {articles[28].body}
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <div className="flex transition rounded-md hover:shadow-md">
//                 <img
//                   src={articles[9].article_img_url}
//                   alt={articles[9].title}
//                   className="object-cover size-52"
//                 />
//                 <div className="p-4">
//                   <Link to={`/article/${articles[9].article_id}`}>
//                     <h3 className="text-lg font-medium text-gray-900">
//                       {articles[9].title}
//                     </h3>
//                   </Link>
//                   <p className="mt-2 text-gray-500 text-sm/relaxed line-clamp-3">
//                     {articles[9].body}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex transition rounded-md hover:shadow-md">
//                 <img
//                   src={articles[11].article_img_url}
//                   alt={articles[11].title}
//                   className="object-cover size-52"
//                 />
//                 <div className="p-4">
//                   <Link to={`/article/${articles[11].article_id}`}>
//                     <h3 className="text-lg font-medium text-gray-900">
//                       {articles[11].title}
//                     </h3>
//                   </Link>
//                   <p className="mt-2 text-gray-500 text-sm/relaxed line-clamp-3">
//                     {articles[11].body}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <h3 className="mb-6 text-2xl font-semibold">All blog post</h3>
//           <ul className="grid grid-cols-3 mb-12 gap-14">
//             {articles.map((article) => {
//               return <ArticleCard key={article.article_id} article={article} />;
//             })}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// }

// export default ArticleList;
// //
