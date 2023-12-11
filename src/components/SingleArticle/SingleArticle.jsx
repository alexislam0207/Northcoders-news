import { useEffect, useState } from "react";
import { getComments, getSingleArticle } from "../../api";
import ArticleDeatils from "./ArticleDetails";
import Comments from "./Comments";

const SingleArticle = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise1 = getSingleArticle(article_id);
    const promise2 = getComments(article_id);
    Promise.all([promise1, promise2]).then(([article, comments]) => {
      setArticle(article);
      setComments(comments);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        <ArticleDeatils article={article} />
        <Comments comments={comments} setComments={setComments}/>
      </>
    );
  }
};
export default SingleArticle;
