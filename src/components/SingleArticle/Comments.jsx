const Comments = ({comments}) => {
    return <ul>
        {comments.map((comment)=>{
            return <li key={comment.comment_id}>
                <p>Comment:</p>
                <p>Author: {comment.author}</p>
                <p>{comment.body}</p>
                <p>Posted on: {comment.created_at}</p>
                <p>Votes: {comment.votes}</p>
            </li>
        })}
    </ul>
};

export default Comments;
