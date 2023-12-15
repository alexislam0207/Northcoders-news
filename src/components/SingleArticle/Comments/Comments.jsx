import CommentDetails from "../CommentDetails/CommentDetails";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import "./Comments.css"

const Comments = ({ comments, setComments }) => {
  const { user } = useContext(UserContext);


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
        <h3 id="com_header">Comments:</h3>
        <ul id="comments_list">
          {comments.map((comment) => {
            return comment.author === user ? (
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
