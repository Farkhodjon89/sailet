import React, { useRef, useState } from "react";
import s from "./Kindness.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import DragonTabs from "../DragonTabs/DragonTabs";
import { dragonsData } from "../../dragonsData";
import { motion } from "framer-motion";
import classnames from "classnames";
import SectionTitle from "../SectionTitle/SectionTitle";






const Kindness = () => {



  return (
    <section className={s.kindness} id="page2">
      {/*<div className={s.ellips1}></div>*/}
      {/*<div className={s.ellips2}></div>*/}
      {/*<div className={s.ellips3}></div>*/}
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
        Weya Pets
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 1 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
        className={s.starLeft}
      >
        <div className={s.star1}></div>
        <div className={s.star2}></div>
        <div className={s.star3}></div>
        <div className={s.star4}></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 1 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
        className={s.starRight}
      >
        <div className={s.star5}></div>
        <div className={s.star6}></div>
        <div className={s.star7}></div>
        <div className={s.star8}></div>
      </motion.div>
      <div className="container">
        <div className={s.kindnessContainer}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ delay: 0.1 }}
          >
            <div className={s.mainBlock}>
              <div className={s.dragonImage}>
                <Image
                  alt="Dragon"
                  src="/hero-images/redDragon.webp"
                  width={393}
                  height={512}
                  priority
                />
              </div>
              <div className={s.dragonAbout}>
                <h2 className={s.title}>2000 NFTs</h2>
                <p className={s.text}>
                  Our Weya elves have their own spiritual creatures known as Weydus, which were their best friends through the ages
                </p>
                <Button text="Participate" />
              </div>
            </div>
          </motion.div>
          <div className={s.utility}>
            utilities
          </div>
          <DragonTabs  />
        </div>
      </div>
      {/*<div className={s.bottomText}>*/}
      {/*  “Our Weya elves have their own spiritual creatures known as Weydus, which were their best friends through the ages”*/}
      {/*</div>*/}

    </section>
  );
};

export default Kindness;
