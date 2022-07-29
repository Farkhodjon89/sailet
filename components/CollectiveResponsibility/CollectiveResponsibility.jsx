import React, {useMemo, useState} from 'react';
import {heroes} from "../../responsibilityData";
import Image from 'next/image';
import s from './CollectiveResponsibility.module.scss'
import classnames from "classnames";
import {motion} from "framer-motion";
import HeroItem from "../HeroItem/HeroItem";
import HeroesSlider from "../HeroesSlider/HeroesSlider";

const CollectiveResponsibility = () => {
  const [activeCard, setActiveCard] = useState(null)
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
      <section className={colored ? classnames(s.collectiveResponsibility, specificColor) : s.collectiveResponsibility} id="page4">
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
              {heroes.map(({id, name, img}) => (
                  <li key={id} className={s.heroItem} onMouseEnter={() => setColored(id)} onMouseLeave={() => setColored(null)}>
                    <div className={s.heroImage}
                         onClick={() => setActiveCard(id)}
                    >
                      <Image quality={100} src={img} width={330}
                             height={id === 4 || id === 5 || id === 6 ? 450 : 390}
                             alt="Hero1"/>
                    </div>
                    <div className={s.heroIcon}>
                      <Image src='/eye.svg' width={100} height={50} quality={100} alt='Eye'/>
                    </div>
                    <div className={s.heroName}>{name}</div>
                    {activeCard && <HeroItem id={id} name={name} img={img} hero={activeCard} setHero={setActiveCard}/>}
                  </li>
              ))}
            </ul>
            <HeroesSlider heroes={heroes}/>
          </div>
        </div>
      </section>
  );
};

export default CollectiveResponsibility;