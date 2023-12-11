import { useEffect, useState } from "react";
import { getAllArticles } from "../api";

const Allarticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <p>{article.title}</p>
            <img src={article.article_img_url} alt="article"/>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Allarticles;
