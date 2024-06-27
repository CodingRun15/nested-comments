// comment.tsx
 
import { useState } from 'react';
import CommentInput from './Input';
import CommentsItem from './CommentItem';

 
 
const CommentComponent = () => {
  const [comments, setComments] = useState([]);
 console.log(comments);
  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };
 
  return (
    <main>
      <div>
        <CommentInput handleAddComment={handleAddComment} />
        <div>
          {comments.map((comment, index) => (
            <CommentsItem
              key={index}
              comment={comment}
              onUpdateComments={(updatedComments) => {
                const updatedCommentsArray = [...comments];
                updatedCommentsArray[index].children = updatedComments;
                setComments(updatedCommentsArray);
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
 
export default CommentComponent;