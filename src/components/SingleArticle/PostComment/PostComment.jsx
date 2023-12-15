import { useState } from "react";
import { postComment } from "../../../api";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import "./PostComment.css";

const PostComment = ({ article_id, setComments }) => {
  const [body, setBody] = useState("");
  const { user } = useContext(UserContext);
  const [error, setError] = useState(false);

  function handleChange(e) {
    if (!user) {
      setError(true);
    } else {
      setError(false);
      setBody(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postComment(article_id, user, body).then((newComment) => {
      setBody("");
      setComments((currComments) => {
        return [newComment, ...currComments];
      });
      alert("comment submitted successfully");
    });
  }

  return (
    <form id="comment_form" onSubmit={handleSubmit}>
      <label htmlFor="com_input">What do you think about this article?</label>
      <br/><input
        id="com_input"
        value={body}
        onChange={handleChange}
        type="text"
        placeholder="add a comment..."
      />
      <button id="com_btn" disabled={!user}>submit</button>
      {error ? (
        <p className="com_error">please select a user for posting comment</p>
      ) : null}
    </form>
  );
};

export default PostComment;
