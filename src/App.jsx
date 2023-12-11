import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import NavSection from "./components/NavSection";
import Allarticles from "./components/Allarticles";
import { getAllArticles } from "../api";

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
      <NavSection/>
      <Routes>
      <Route path="/all-articles" element={<Allarticles articles={articles} loading={loading}/>} />
      </Routes>
    </>
  );
}

export default App;
