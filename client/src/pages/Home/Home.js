import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.scss"

const Home = () => {
    return <div className="content">
        <Posts />
        <Sidebar />
    </div>
}

export default Home;