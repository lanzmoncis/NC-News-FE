import Header from "./components/header";
import ArticleList from "./components/article-list";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
