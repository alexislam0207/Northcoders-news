import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavSection from "./components/NavSection/NavSection";
import Allarticles from "./components/Allarticles/Allarticles/Allarticles";
import SingleArticle from "./components/SingleArticle/SingleArticle/SingleArticle";
import Home from "./components/Home/Home";
import { getAllTopics } from "./api";

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      <Header />
      <NavSection topics={topics} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:topic" element={<Allarticles />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
