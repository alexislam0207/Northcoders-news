import { useState } from "react";
import { postComment } from "../../api";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

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
      <label>
        What do you think about this article?
        <input
          value={body}
          onChange={handleChange}
          type="text"
          placeholder="add a comment..."
        />
      </label>
      {error ? <p className="error">please select an avatar for posting comment</p> : null}
      <button disabled={!user}>submit</button>
    </form>
  );
};

export default PostComment;
