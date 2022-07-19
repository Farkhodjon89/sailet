import React, {useState} from 'react';
import s from './Kindness.module.scss';
import Image from "next/image";
import Button from "../Button/Button";
import DragonTabs from "../DragonTabs/DragonTabs";

const Kindness = () => {

  return (
      <section className={s.kindness} id="page2">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.kindnessContainer}>
            <div className={s.mainBlock}>
              <div className={s.dragonImage}>
                <Image alt='Dragon' src='/hero-images/redDragon.png' width={393} height={512} priority/>
              </div>
              <div className={s.dragonAbout}>
                <h2 className={s.title}>Kindness</h2>
                <p className={s.text}>
                  Kindness was often seen as a weakness. But we don't think so. Kindness is a fundamental trait that was
                  uniting and shaped humanity throughout the ages. Moreover, kindness is not just helping each other
                  like answering questions, guiding newcomers, and being responsible and proactive. It is something much
                  bigger, it is a true belief, belief in people around you, belief in things that others carry about.
                </p>
                <Button/>
              </div>
            </div>
            <DragonTabs />
          </div>
        </div>
      </section>
  );
};

export default Kindness;