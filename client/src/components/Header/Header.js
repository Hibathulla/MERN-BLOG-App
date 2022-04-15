import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory} from "react-router-dom";
import img12 from "./favicon-32x32.png"

import { authActions } from "../../store/auth-slice";

import "./Header.scss"

const Header = () => {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.auth.user);

    const logoutHandler = () => {
        
        dispatch(authActions.logoutHandler())
        setOpen(false);
        history.replace("/home")
    }

    return (
        <header className="header">
        <img src={img12} alt="Header-logo" />
            <h1 className="header__logo">
                BLOG
            </h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <NavLink activeClassName="headeractive" to="/home" className="header__items">Home</NavLink>
                    <NavLink activeClassName="headeractive" to="/write" className="header__items">Write</NavLink>
                    <NavLink activeClassName="headeractive" to="/aboutus" className="header__items">About us</NavLink>
                    {/* <NavLink activeClassName="headeractive" to="/" className="header__items">About us</NavLink> */}
                </ul>
            </nav>
            {!user && <div className="header__authentication">
                <Link to="/signin" className="header__login">Log in</Link>
                <Link to="/signup" className="header__signup">Sign up</Link>
            </div>}

        {user && <div className="header__authentication">
                <div className="header__user">
                    <span className="header__welcome">Welcome</span>
                    <span className="header__welcomeuser">{user.username}</span>
                </div>
                <button onClick={logoutHandler} className="header__logout">Log out</button>
            </div>}

            <div className="hamburger" onClick={() => setOpen(!open)}>
                <span className="hamburger__line" />
                <span className="hamburger__line" />
                <span className="hamburger__line" />
            </div>

           {open && <ul className="hamburger__menu" style={{right: open ? "0" : "10vw"}}>

            {!user && <div className="hamburger__authentication">
                <Link to="/signin" onClick={() => setOpen(!open)} className="header__login">Log in</Link>
                <Link to="/signup" onClick={() => setOpen(!open)} className="header__signup">Sign up</Link>
            </div>}

        {user && <div className="hamburger__authentication">
                <div className="header__user">
                    <span className="header__welcome">Welcome</span>
                    <span className="header__welcomeuser">{user.username}</span>
                </div>
                <button onClick={logoutHandler} className="header__logout">Log out</button>
            </div>}

            <NavLink activeClassName="headeractive" to="/home" onClick={() => setOpen(!open)} className="hamburger__items">Home</NavLink>
                    <NavLink onClick={() => setOpen(!open)} activeClassName="headeractive" to="/write" className="hamburger__items">Write</NavLink>
                    <NavLink onClick={() => setOpen(!open)} activeClassName="headeractive" to="/aboutus" className="hamburger__items">About us</NavLink>
            </ul>}
        </header>
    )
};

export default Header;