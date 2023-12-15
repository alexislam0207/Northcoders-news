import { Link } from "react-router-dom";


const ArticleCard = ({article}) => {
  return (
    <li>
      <p>{article.title}</p>
      <img src={article.article_img_url} alt="article" />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Comment count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <Link to={`/article/${article.article_id}`}>More datails</Link>
    </li>
  );
};
export default ArticleCard;
