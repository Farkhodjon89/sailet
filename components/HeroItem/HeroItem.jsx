import React, {useEffect, useState} from 'react';
import s from './HeroItem.module.scss'
import classnames from "classnames";
import _ from "lodash";
import Image from "next/image";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const HeroItem = ({hero, setHero, img, id, name}) => {
  const [element, setElement] = useState(null)

  useEffect(() => {
    setElement(document.getElementById("portal"))
  }, [])

  return element ?  ReactDOM.createPortal(
      <div onClick={() => setHero(null)} className={hero === id ? classnames(s.heroModal, s.active) : s.hidden}>
        <div className={s.heroContainer}>
          <div className={s.heroImage}>
            <Image quality={100} src={img} width={529} height={572} alt="Hero"/>
          </div>
          <div className={s.heroContent}>
            <h4 className={s.title}>{name}</h4>
            <p>Let's have each other accountable for every success or failure. We want to build a community where people
              realize the real value of their involvement and how important are their ideas, help and confidence in our
              success, not to mention the desire to be a part of Weya. We will hear out each and everyone who has
              something to say. </p>
            <Button text='BY FOR 100$'/>
          </div>
        </div>
      </div>,
      element
  ) : null


};

export default HeroItem;