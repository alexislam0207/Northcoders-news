import { useEffect, useState } from "react";
import { getComments, getSingleArticle } from "../../api";
import ArticleDeatils from "./ArticleDetails";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const promise1 = getSingleArticle(article_id);
    const promise2 = getComments(article_id);
    Promise.all([promise1, promise2])
      .then(([article, comments]) => {
        setApiError(null);
        setArticle(article);
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setApiError(err);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  } else if (apiError) {
    console.log(apiError.msg);
    // return <Error msg={apiError.msg} />;
  } else {
    return (
      <>
        <ArticleDeatils article={article} setArticle={setArticle} />
        <PostComment article_id={article_id} setComments={setComments} />
        <Comments comments={comments} setComments={setComments} />
      </>
    );
  }
};
export default SingleArticle;
