import React, {useRef} from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import s from './Creativity.module.scss'
import Image from 'next/image';
import {motion} from 'framer-motion';
import {texts} from "../../creativityText";

const Creativity = () => {

  return (
      <section className={s.creativity} id='page3'>
        <div className="container fix">
          <div className={s.creativityContainer}>
            <motion.div
                initial={{
                  opacity: 0
                }}
                viewport={{once: false, amount: 0.5}}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                  }
                }}
            >
              <SectionTitle title="Creativity is a key to success"/>
            </motion.div>
            <div className={s.content}>
              <div className={s.leftSide}>
                <Image alt='Girl' src='/hero-images/girlHero.png' width={452} height={493} priority/>
              </div>
              <div className={s.rightSide}>
                {texts.map((text, index) => <p key={index} className={s.slideText}>{text}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Creativity;