import Comment from "./Comment";


const CommentsList = ({ comments, addReply }) =>{
    return(
    <div>
      {comments.length>1?comments.map(comment => (
        <Comment key={comment.id} comment={comment} addReply={addReply} comments={comments} />
      )):null}
    </div>
    )
  };
  
  export default CommentsList;