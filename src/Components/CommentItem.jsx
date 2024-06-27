
 import '../App.css';
import { useState } from 'react';
import CommentInput from './Input';
const CommentsItem = ({
  comment,
  onUpdateComments,
}) => {
  const [reply, setReply] = useState(false);
  const [edit,setEdit] = useState(false);
  const handleDelete = () => {
    onUpdateComments(comment.children.filter((child) => child.index!== comment.index));
  }
  return (
    <div className='nested-comment' >
      <p contentEditable={edit} suppressContentEditableWarning={edit}>{comment.content}</p>
      <div>
        {reply && (
          <CommentInput
            handleAddComment={(e) => onUpdateComments([...comment.children, e])}
          />
        )}
        <div className='comment-buttons'>
        <button onClick={() => setReply(!reply)}>
          {reply ? 'Cancel' : 'Reply'}
        </button>
        <button onClick = {()=>setEdit(!edit)}>{edit?'Save':'Edit'}</button>
        <button onClick={handleDelete} >Delete</button>
        </div>
      </div>
      <div>
        {comment.children.map((child, index) => (
          <CommentsItem
            key={index}
            comment={child}
            onUpdateComments={(updatedComments) => {
              const updatedChildren = [...comment.children];
              updatedChildren[index] = { ...child, children: updatedComments };
              onUpdateComments(updatedChildren);
            }}
          />
        ))}
      </div>
    </div>
  );
};
 
export default CommentsItem;