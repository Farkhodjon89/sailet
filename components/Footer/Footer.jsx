import s from './Foooter.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faLinkedin, faInstagram, faTelegram, faFacebook} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
      <footer className={s.footer}>
        <div className="container">
          <div className={s.footerContainer}>
            <div className={s.leftSide}>
              <span></span>
              <span>Since 2017 Sailet</span>
            </div>
            <div className={s.rightSide}>
              <div className={s.additionalQuestions}>
                <p>Additional questions <a className={s.link} href='sales@sailet.pro'> sales@sailet.pro</a></p>
                <p>For affiliate program questions <a className={s.link} href='info@sailet.pro'> info@sailet.pro</a></p>
              </div>
              <ul className={s.socialMedia}>
                <li><a href="/"><FontAwesomeIcon className={s.icon} icon={faFacebook}/></a></li>
                <li><a href="/"><FontAwesomeIcon className={s.icon} icon={faInstagram}/></a></li>
                <li><a href="/"><FontAwesomeIcon className={s.icon} icon={faLinkedin}/></a></li>
                <li><a href="/"><FontAwesomeIcon className={s.icon} icon={faTelegram}/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;