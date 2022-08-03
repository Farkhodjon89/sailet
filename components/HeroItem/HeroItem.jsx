import React, {useEffect, useState} from "react";
import s from "./HeroItem.module.scss";
import classnames from "classnames";
import _ from "lodash";
import Image from "next/image";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const HeroItem = ({hero, setHero, img, id, name, text, video}) => {
  console.log(video)
  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  return element
      ? ReactDOM.createPortal(
          <div
              onClick={() => setHero(null)}
              className={hero === id ? classnames(s.heroModal, s.active) : s.hidden}
          >
            <div className={s.heroContainer}>
              <div className={s.heroImage}>
                {/*<Image quality={100} src={img} width={529} height={572} alt="Hero"/>*/}
                <video
                    style={{
                      width: '450px',
                      height: '500px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                      zIndex: -1,
                      outline: 'none',
                    }}
                    tabIndex="-1"
                    preload="none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playinginline="true"
                    poster=""
                >
                  <source src={require(`../../public/videos/${video}`)} type="video/mp4"/>
                  Тег video не поддерживается вашим раузером.
                </video>
              </div>
              <div className={s.heroContent}>
                <h4 className={s.title}>{name}</h4>
                <p>{text}</p>
                {/*<Button text="BY FOR 100$" />*/}
              </div>
            </div>
          </div>,
          element
      )
      : null;
};

export default HeroItem;
