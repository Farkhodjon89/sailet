import React, {useState} from 'react';
import {heroes} from "../../responsibilityData";
import Image from 'next/image';
import s from './CollectiveResponsibility.module.scss'
import classnames from "classnames";
import HeroItem from "../HeroItem/HeroItem";
import HeroesSlider from "../HeroesSlider/HeroesSlider";

const CollectiveResponsibility = () => {
  const [activeCard, setActiveCard] = useState(null)

  return (
      <section className={s.collectiveResponsibility} id="page4">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <h2 className={s.title}>Collective responsibility</h2>
        <div className="container">
          <div className={s.collectiveResponsibilityContainer}>
            <ul className={s.heroesList}>
              {heroes.map(({id, name, img}) => (
                  <li key={id} className={s.heroItem}>
                    <div className={s.heroImage}
                         onClick={() => setActiveCard(id)}
                    >
                      <Image quality={100} src={img} width={330} height={390} alt="Hero1"/>
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