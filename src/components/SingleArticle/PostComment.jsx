import { useState } from "react";
import { postComment } from "../../api";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const PostComment = ({ article_id, setComments }) => {
  const [body, setBody] = useState("");
  const { user } = useContext(UserContext);

  function handleChange(e) {
    setBody(e.target.value);
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
      <button>submit</button>
    </form>
  );
};

export default PostComment;
