import { updateVote } from "../../api";

const ArticleDeatils = ({ article, setArticle }) => {
  function handleClick(vote) {
    updateVote(article.article_id, vote).catch(()=>{
      setArticle((currArticle)=> {return { ...currArticle, votes: currArticle.votes - vote }});
      alert("Sorry, something went wrong. Please try again later...")

    });
    setArticle((currArticle)=> {return { ...currArticle, votes: currArticle.votes + vote }});
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
      <button onClick={()=>{handleClick(1)}}>Up vote 👍🏻</button>
      <button onClick={()=>{handleClick(-1)}}>Down vote 👎🏻</button>
    </section>
  );
};

export default ArticleDeatils;
