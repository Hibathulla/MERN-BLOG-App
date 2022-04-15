import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../../config";

import SingleComment from "../SingleComment/SingleComment";
import "./AllComments.scss"



const AllComments = (props) => {

    const [comment, setComment] = useState([])
   
const commentFetch = useCallback(async () => {
    const response = await axiosInstance.get(`/posts/${props.postId}/comments`);

    console.log(response.data.comments);
    setComment(response.data.comments)
    
    
   }, [props.postId])

   useEffect(() => {
       
       commentFetch();
       
   }, [commentFetch])
       
    return <div className="allCommentslist">  
    {comment.map(com => {
        return <SingleComment key={com._id} comText={com.text} />
    })}
   
    {/* <SingleComment /> */}
</div>
};

export default AllComments;