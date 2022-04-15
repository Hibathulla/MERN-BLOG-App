import { useRef } from "react";
import "./CommentForm.scss"
import { axiosInstance } from "../../config";

const CommentForm = (props) => {

const addComment = useRef();

    const commentSubmitHandler = async (e) => {
    const comment = addComment.current.value;
    console.log(props.postId);
        try {
           await axiosInstance.post(`/posts/${props.postId}/comments`, {
               text: comment
           })
        } catch (err) {
            console.log(err);
        }
}

    return <div className="comment">
    <form onSubmit={commentSubmitHandler}>
        <input ref={addComment} type="text" className="comment__area"  placeholder="Add a comment..." required />
        <button className="comment__add">Add Comment</button>
    </form>
    </div>
};


export default CommentForm;