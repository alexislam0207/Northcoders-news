import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavSection from "./components/NavSection";
import Allarticles from "./components/Allarticles";
import { getAllArticles } from "../api";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <NavSection />
      <Routes>
        <Route
          path="/all-articles"
          element={<Allarticles articles={articles} loading={loading} />}
        />
        {articles.map((article) => {
          return (
            <Route
              key={article.article_id}
              path={`/article/${article.article_id}`}
              element={<SingleArticle article_id={article.article_id} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
