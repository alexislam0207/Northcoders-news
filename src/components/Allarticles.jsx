import { Link } from "react-router-dom";
import { getAllArticles } from "../api";
import { useEffect, useState } from "react";

const Allarticles = ({ articles, setArticles, path }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllArticles(path).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [path]);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <ul id="articles_list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <p>{article.title}</p>
              <img src={article.article_img_url} alt="article" />
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <Link to={`/article/${article.article_id}`}>More datails</Link>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Allarticles;
