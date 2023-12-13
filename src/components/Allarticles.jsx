import { Link, useParams } from "react-router-dom";
import { getAllArticles } from "../api";
import { useEffect, useState } from "react";

const Allarticles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setLoading(true);
    getAllArticles(topic, query, order).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic, query, order]);

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  function handleOrderChange(e) {
    setOrder(e.target.value);
  }

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        <label>
          Sort by
          <select value={query} onChange={handleQueryChange}>
            <option value="created_at">date</option>
            <option value="votes">votes</option>
            <option value="comment_count">comment count</option>
          </select>
          <select value={order} onChange={handleOrderChange}>
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </label>
        <ul id="articles_list">
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <p>{article.title}</p>
                <img src={article.article_img_url} alt="article" />
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Comment count: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                <Link to={`/article/${article.article_id}`}>More datails</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Allarticles;
