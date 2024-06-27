import { useRef } from "react";

 
const CommentInput = ({
  handleAddComment,
}) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('comment');
    if (!comment || comment.trim() === '') return   alert('Comment is required');
    
    handleAddComment({ content: comment, children: [] });
    e.currentTarget.reset();
  };
 
  return (
    <div className="input-main">
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" placeholder="Add comment" ref={inputRef} />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};
 
export default CommentInput;