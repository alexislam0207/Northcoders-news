import { deleteComment } from "../../api";

const Comments = ({ comments, setComments }) => {
  const username = "jessjelly";

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

  if (comments.length === 0) {
    return (
      <div className="comments_section">
        <h2>Comments:</h2>
        <p>No comment for this article yet</p>
      </div>
    );
  } else {
    return (
      <div className="comments_section">
        <h2>Comments:</h2>
        <ul id="comments_list">
          {comments.map((comment) => {
            if (comment.author === username) {
              return (
                <li key={comment.comment_id}>
                  <p>Author: {comment.author}</p>
                  <p>{comment.body}</p>
                  <p>Posted on: {comment.created_at}</p>
                  <p>Votes: {comment.votes}</p>
                  <button
                    onClick={() => {
                      handleClick(comment.comment_id);
                    }}
                  >
                    delete comment
                  </button>
                </li>
              );
            } else {
              return (
                <li key={comment.comment_id}>
                  <p>Author: {comment.author}</p>
                  <p>{comment.body}</p>
                  <p>Posted on: {comment.created_at}</p>
                  <p>Votes: {comment.votes}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
};

export default Comments;
