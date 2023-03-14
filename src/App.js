import Header from "./components/header";
import ArticleList from "./components/article-list";
import Navbar from "./components/navbar";
import SingleArticle from "./components/single-article";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
