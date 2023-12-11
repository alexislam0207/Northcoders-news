import { updateVote } from "../../api";

const ArticleDeatils = ({ article, setArticle }) => {
  function incrementVote() {
    updateVote(article.article_id, 1);
    setArticle({ ...article, votes: article.votes + 1 });
  }
  function decrementVote() {
    updateVote(article.article_id, -1);
    setArticle({ ...article, votes: article.votes - 1 });
  }

  return (
    <section className="single_article">
      <p>{article.title}</p>
      <img src={article.article_img_url} alt="article" />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <p>Posted on: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <button onClick={incrementVote}>Up vote 👍🏻</button>
      <button onClick={decrementVote}>Down vote 👎🏻</button>
    </section>
  );
};

export default ArticleDeatils;
