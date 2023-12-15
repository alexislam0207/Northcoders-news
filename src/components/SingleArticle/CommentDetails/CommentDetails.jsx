import { deleteComment } from "../../../api";
import "./CommentDetails.css"

const CommentDetails = ({ comment, setComments, bySameUser }) => {
    function handleClick(comment_id) {
        deleteComment(comment_id).then(() => {
          setComments((currComments) => {
            const commentsAfterDeleted = [];
            currComments.forEach((comment) => {
              if (comment.comment_id !== comment_id) {
                commentsAfterDeleted.push(comment);
              }
            });
            return commentsAfterDeleted;
          });
          alert("comment deleted");
        });
      }

  return (
    <li>
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Posted on: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      {bySameUser ? (
        <button
          onClick={() => {
            handleClick(comment.comment_id);
          }}
        >
          delete comment
        </button>
      ) : null}
    </li>
  );
};
export default CommentDetails;
