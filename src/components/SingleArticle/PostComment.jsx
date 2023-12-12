import { useState } from "react";
import { postComment } from "../../api";

const PostComment = ({ article_id, setComments }) => {
  const [body, setBody] = useState("");
  const username = "jessjelly";

  function handleChange(e) {
    setBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    postComment(article_id, username, body).then((newComment) => {
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
