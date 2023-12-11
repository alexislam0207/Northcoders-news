import { useEffect, useState } from "react";
import { getSingleArticle } from "../api";

const SingleArticle = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <section className="single_article">
        <p>{article.title}</p>
        <img src={article.article_img_url} alt="article" />
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <p>Posted on: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </section>
    );
  }
};
export default SingleArticle;
