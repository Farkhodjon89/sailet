import s from './Foooter.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faLinkedin, faTwitter, faDiscord, faInstagram, faTelegram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


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
                <li>
                  <Link href=''>
                    <a><FontAwesomeIcon className={s.icon} icon={faFacebook}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/weyaland/'>
                    <a><FontAwesomeIcon className={s.icon} icon={faInstagram}/></a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a><FontAwesomeIcon className={s.icon} icon={faLinkedin}/></a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a ><FontAwesomeIcon className={s.icon} icon={faTelegram}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='https://twitter.com/WeyaLand'>
                    <a><FontAwesomeIcon className={s.icon} icon={faTwitter}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='https://discord.gg/tWf3gYj5FC'>
                    <a><FontAwesomeIcon className={s.icon} icon={faDiscord}/></a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;