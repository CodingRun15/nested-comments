import { useState } from "react";
import '../App.css';
const Comment = ({ comment, addReply,comments }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");
    const[edit,setEdit] = useState(false);
    const handleAddReply = () => {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReplyBox(false);
    };
    return (
        <>
        {comment.text?
      <div className="reply-text" style={{ marginLeft: '20px', border: '1px solid white', padding: '10px', backgroundColor:"ghostwhite", width:"300px" }}>
        <p contentEditable={edit} suppressContentEditableWarning={edit}>{comment.text}</p>
        <div id="buttons-container">
        <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
        <button onClick={()=>{setEdit(!edit)}}>{edit?'Save':'Edit'}</button>
        <button >Delete</button>
        </div>
        {showReplyBox && (
          <div id="reply-box">
            <input 
              type="text" 
              value={replyText} 
              onChange={(e) => setReplyText(e.target.value)} 
              placeholder="Write a reply..." 
            />
            <button onClick={handleAddReply}>Add Reply</button>
          </div>
        )}
        {comment.replies.length > 0 && (
          <div>
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} addReply={addReply} />
            ))}
          </div>
        )}
      </div>
      : null}
      </>
    );
  };
  export default Comment