import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
            <FontAwesomeIcon className="footer__socialicons" icon={faInstagram} />
            <FontAwesomeIcon className="footer__socialicons" icon={faLinkedin} />
            <FontAwesomeIcon className="footer__socialicons" icon={faGithub} />
            </div>

    
            <ul className="footer__list">
                <li>
                    <Link to="/home" className="footer__items">Home</Link>
                </li>
                <li>
                    <Link to="/write" className="footer__items">Write</Link>
                </li>
                <li>
                    <Link to="/aboutus" className="footer__items">About</Link>
                </li>
            </ul>
            <p className="footer__copyright">
                copyright &#169; HIBATHULLA CM
            </p>
        </footer>
    )
}

export default Footer;