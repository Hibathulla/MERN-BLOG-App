import SinglePost from "../SinglePost/SinglePost";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./SinglePage.scss"

const SinglePage = () => {
    return <div className="pages">
        <SinglePost />
        <Sidebar className="noSide" />
    </div>
};

export default SinglePage;