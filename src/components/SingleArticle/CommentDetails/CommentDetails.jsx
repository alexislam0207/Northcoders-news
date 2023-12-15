import { deleteComment } from "../../../api";
import "./CommentDetails.css";

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
    <li className="com_card">
      <p>{comment.body}</p>
      <p className="com_notes">
        Author: {comment.author}
        <br />
        Posted on: {comment.created_at}
        <br />
        Votes: {comment.votes}
        {bySameUser ? (
          <>
            <br />
            <br />
            <button
              className="del_com_btn"
              onClick={() => {
                handleClick(comment.comment_id);
              }}
            >
              delete comment
            </button>
          </>
        ) : null}
      </p>
    </li>
  );
};
export default CommentDetails;
