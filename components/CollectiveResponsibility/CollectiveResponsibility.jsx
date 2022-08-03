import React, {useMemo, useState} from 'react';
import {heroes} from "../../responsibilityData";
import s from './CollectiveResponsibility.module.scss'
import classnames from "classnames";
import {motion} from "framer-motion";
import HeroItem from "../HeroItem/HeroItem";
import HeroesSlider from "../HeroesSlider/HeroesSlider";
import HeroCard from "../HeroCard/HeroCard";

const CollectiveResponsibility = () => {
  const [colored, setColored] = useState(null)

  const specificColor = useMemo(() => {
    switch (colored) {
      case 1:
        return s.firstColor
      case 2:
        return s.secondColor
      case 3:
        return s.thirdColor
      case 4:
        return s.fourthColor
      case 5:
        return s.fifthColor
      default:
        return s.sixthColor
    }
  }, [colored])

  const defaultStyle = s.collectiveResponsibilityContainer

  return (
      <section className={colored ? classnames(s.collectiveResponsibility, specificColor) : s.collectiveResponsibility}
               id="page4">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <motion.h2
            initial={{
              opacity: 0
            }}
            viewport={{once: false, amount: 0.5}}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.2,
              }
            }}
            className={s.title}>
          Collective responsibility
        </motion.h2>
        <div className="container">
          <div className={defaultStyle}>
            <ul className={s.heroesList}>
              {heroes.map(({id, name, img, text, video}) => (
                  <HeroCard key={id} id={id} setColored={setColored} video={video} text={text}  name={name} img={img}/>
              ))}
            </ul>
            <HeroesSlider heroes={heroes}/>
          </div>
        </div>
      </section>
  );
};

export default CollectiveResponsibility;