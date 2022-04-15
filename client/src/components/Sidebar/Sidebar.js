import pc from "./pc.jpg"

import "./Sidebar.scss"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">About me</h2>
        </div>

        <img src={pc} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corporis doloremque sapiente omnis consequatur officia dolorum nesciunt dolorem. Quo expedita vero eius, nemo velit omnis saepe aut eligendi alias ut!</p>
    </div>;
}

export default Sidebar;