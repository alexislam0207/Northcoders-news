import CommentDetails from "./CommentDetails";

const Comments = ({ comments, setComments }) => {
  const username = "jessjelly";

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
            return comment.author === username ? (
              <CommentDetails
                comment={comment}
                setComments={setComments}
                bySameUser={true}
                key={comment.comment_id}
              />
            ) : (
              <CommentDetails
                comment={comment}
                setComments={setComments}
                bySameUser={false}
                key={comment.comment_id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Comments;
