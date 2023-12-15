import { updateVote } from "../../../api";
import "./ArticleDetails.css"

const ArticleDeatils = ({ article, setArticle }) => {
  function handleClick(vote) {
    updateVote(article.article_id, vote).catch(() => {
      setArticle((currArticle) => {
        return { ...currArticle, votes: currArticle.votes - vote };
      });
      alert("Sorry, something went wrong. Please try again later...");
    });
    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + vote };
    });
  }

  return (
    <section className="single_article">
      <p className="sing_art_title">{article.title}</p>
      <img className="art_img" src={article.article_img_url} alt="article" />
      <p className="art_body">{article.body}</p>
      <p>Author: {article.author}
      <br/>Topic: {article.topic}
      <br/>Posted on: {article.created_at.slice(0,10)} {article.created_at.slice(11, 16)}
      <br/>Votes: {article.votes}</p>
      <button className="vote_btn"
        onClick={() => {
          handleClick(1);
        }}
      >
        Up vote 👍🏻
      </button>
      <button className="vote_btn"
        onClick={() => {
          handleClick(-1);
        }}
      >
        Down vote 👎🏻
      </button>
    </section>
  );
};

export default ArticleDeatils;
