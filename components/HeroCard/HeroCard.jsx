import React, {useState} from 'react';
import s from './HeroCard..module.scss';
import Image from "next/image";
import HeroItem from "../HeroItem/HeroItem";

const HeroCard = ({ name, img, setColored, id, text, video}) => {
  const [activeCard, setActiveCard] = useState(null)

  return (
      <li className={s.card} onMouseEnter={() => setColored(id)}
          onMouseLeave={() => setColored(null)}>
        <div className={s.frontHeroItem}>
          Weyaland
        </div>
        <div className={s.heroItem} >
          <div className={s.heroImage} onClick={() => setActiveCard(id)}>
            <Image quality={100} src={img} width={330} height={390}
                   alt="Hero1"/>
          </div>
          <div className={s.heroIcon}>
            <Image src='/eye.svg' width={100} height={50} quality={100} alt='Eye'/>
          </div>
          <div className={s.heroName}>{name}</div>
          {activeCard &&
          <HeroItem id={id} name={name} video={video} text={text} img={img} hero={activeCard} setHero={setActiveCard}/>}
        </div>
      </li>
  );
};

export default HeroCard;