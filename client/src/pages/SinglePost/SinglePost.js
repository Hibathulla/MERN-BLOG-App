import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentBox from "../../components/CommentBox/CommentBox";

import "./SinglePost.scss"
import { axiosInstance } from "../../config";

const SinglePost = () => {
    const [loadedBlog, setLoadedBlog] = useState({});

    const params = useParams();

    console.log(params.postId);

    useEffect(() => {
        const singleFetch = async () => {
           const res = await axiosInstance.get(`/posts/${params.postId}`)
           console.log(res);
           setLoadedBlog(res.data)
        }
        singleFetch()
    }, [params.postId])

    

    return <div className="single">
        <div className="single__simg">
            <img src={loadedBlog.image} alt="" className="single__simg1" />
        </div>

        <div className="single__titlebox">
            <h2 className="single__title">{loadedBlog.title}</h2>
            <span className="single__date">{loadedBlog.date}</span>
            <p className="single__para">{loadedBlog.desc}</p>
        </div>

       <CommentBox postId={params.postId} />

        
    </div>
};

export default SinglePost;