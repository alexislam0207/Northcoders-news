import { Link } from "react-router-dom";
import "./ArticleCard.css"


const ArticleCard = ({article}) => {
  return (
    <li className="article_card">
      <p className="art_title">{article.title}</p>
      <img className="art_img" src={article.article_img_url} alt="article" />
      <p>Author: {article.author}
      <br/>Topic: {article.topic}
      <br/>Comment count: {article.comment_count}
      <br/>Votes: {article.votes}
      <br/><Link className="art_link" to={`/article/${article.article_id}`}>More details...</Link></p>
    </li>
  );
};
export default ArticleCard;
