import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavSection from "./components/NavSection";
import Allarticles from "./components/Allarticles";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Home from "./components/Home";
import { getAllTopics } from "./api";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics)=>{
      setTopics(topics);
    })
  }, []);

  return (
    <>
      <Header />
      <NavSection topics={topics}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/all-articles"
          element={<Allarticles articles={articles} setArticles={setArticles} path=""/>}
        />
        {topics.map((topic) => {
          return (
            <Route
              key={topic.slug}
              path={`/${topic.slug}`}
              element={<Allarticles articles={articles} setArticles={setArticles} path={topic.slug}/>}
            />
          );
        })}
        {articles.length!==0 ?articles.map((article) => {
          return (
            <Route
              key={article.article_id}
              path={`/article/${article.article_id}`}
              element={<SingleArticle article_id={article.article_id} />}
            />
          );
        }):null}
      </Routes>
    </>
  );
}

export default App;
