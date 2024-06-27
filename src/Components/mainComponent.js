import { useState } from "react";
import CommentsList from "./CommentsList";
const initialComments = [
    {
      id: 1,
      text:"",
       replies:[]
    },
  ];
const CommentComp = ()=>{
    const [comments, setComments] = useState(initialComments);
    const [newCommentText, setNewCommentText] = useState("");
  console.log(comments);
    const addComment = () => {
      const newComment = {
        id: comments.length + 1,
        text: newCommentText,
        replies: [],
      };
      setComments([...comments, newComment]);
      setNewCommentText("");
    };
    const addReply = (parentId, replyText) => {
      const addReplyRecursively = (comments, parentId, replyText) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now(),
                  text: replyText,
                  replies: [],
                },
              ],
            };
          } else {
            return {
              ...comment,
              replies: addReplyRecursively(comment.replies, parentId, replyText),
            };
          }
        });
      };
  
      setComments(addReplyRecursively(comments, parentId, replyText));
    };
  
    return (
      <div id="main-box">
        <h1>Comments</h1>
        <div className="form">
          <input 
            type="text" 
            value={newCommentText} 
            onChange={(e) => setNewCommentText(e.target.value)} 
            placeholder="Write a comment..." 
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <CommentsList comments={comments} addReply={addReply} />
      </div>
    );
}
export default CommentComp;