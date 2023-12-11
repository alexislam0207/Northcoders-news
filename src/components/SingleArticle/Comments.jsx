const Comments = ({ comments }) => {
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
            return (
              <li key={comment.comment_id}>
                <p>Author: {comment.author}</p>
                <p>{comment.body}</p>
                <p>Posted on: {comment.created_at}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Comments;
