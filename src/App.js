import Header from "./components/header";
import ArticleList from "./components/article-list";
import Navbar from "./components/navbar";
import SingleArticle from "./components/single-article";
import TopicPage from "./components/topics-page";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <Header />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:topic" element={<TopicPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
