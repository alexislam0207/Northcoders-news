import { Link } from "react-router-dom";

const Allarticles = ({articles, loading}) => {

  if (loading) {
    return <p>loading...</p>;
  }else{
 return (
    <ul>
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
