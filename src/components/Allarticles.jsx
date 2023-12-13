import { Link, useParams, useSearchParams } from "react-router-dom";
import { getAllArticles } from "../api";
import { useEffect, useState } from "react";

const Allarticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  useEffect(() => {
    setLoading(true);
    getAllArticles(topic, sortBy, orderBy, page).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic, sortBy, orderBy, page]);

  function handleQueryChange(e) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", e.target.value);
    setSearchParams(newParams);
    setSortBy(e.target.value);
  }
  function handleOrderChange(e) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", e.target.value);
    setSearchParams(newParams);
    setOrderBy(e.target.value);
  }

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        <label>
          Sort by
          <select value={sortBy} onChange={handleQueryChange}>
            <option value="created_at">date</option>
            <option value="votes">votes</option>
            <option value="comment_count">comment count</option>
          </select>
          <select value={orderBy} onChange={handleOrderChange}>
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
        <button
          onClick={() => {
            setPage((currentPage) => currentPage - 1);
          }}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            setPage((currentPage) => currentPage + 1);
          }}
          disabled={articles.length < 10}
        >
          Next Page
        </button>
      </>
    );
  }
};

export default Allarticles;
