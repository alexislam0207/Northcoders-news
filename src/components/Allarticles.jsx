import { Link, useParams } from "react-router-dom";
import { getAllArticles } from "../api";
import { useEffect, useState } from "react";
import Error from "./Error";

const Allarticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllArticles(topic)
      .then((articles) => {
        setApiError(null);
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setApiError(err);
      });
  }, [topic]);

  if (loading) {
    return <p>loading...</p>;
  } else if (apiError) {
    return <Error msg={apiError.msg} />;
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
