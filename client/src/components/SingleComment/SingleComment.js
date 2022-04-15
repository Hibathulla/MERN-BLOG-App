import "./SingleComment.scss"

const SingleComment = (props) => {

    return <div className="singlecomment">
        <p className="singlecomment__one">{props.comText}</p>
    </div>
};

export default SingleComment;