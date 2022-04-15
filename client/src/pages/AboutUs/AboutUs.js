import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import aboutus from "./aboutus.jpg"

import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <section className="about">
        <h2 className="about__title">About us</h2>

        <div className="about__details">

        <div className="about__left">
        <h3 className="about__mainlefttitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                <p className="about__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem obcaecati itaque quaerat velit dicta magnam, aspernatur est quam amet cumque asperiores deleniti mollitia quis quo non harum adipisci! Sint eos mollitia quasi, quaerat sit eligendi nihil cum pariatur non, dolor consequatur maiores modi est error dolorum vero, velit temporibus rerum.</p>
                <button className="about__btn">Contact Us</button>
                <div className="about__social">
            <FontAwesomeIcon className="about__socialicons" icon={faInstagram} />
            <FontAwesomeIcon className="about__socialicons" icon={faLinkedin} />
            <FontAwesomeIcon className="about__socialicons" icon={faTwitter} />
            </div>
            </div>
            
            <div className="about__right">
                <img src={aboutus} alt="" className="about__image" />
            </div>
        </div>
            
        </section>
    )
}

export default AboutUs;