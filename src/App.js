import Logo from "./components/logo";
import ArticleList from "./components/article-list";
import Navbar from "./components/navbar";
import SingleArticle from "./components/single-article";
import TopicPage from "./components/topics-page";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="container flex items-center justify-between h-10 px-6 py-10 mx-auto mb-4 lg:px-0">
        <Logo />
        <Navbar />
      </header>
      <div className="container flex px-6 mx-auto mb-12 lg:px-0 grow">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:topic" element={<TopicPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
