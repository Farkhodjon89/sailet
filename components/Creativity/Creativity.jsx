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
              <SectionTitle title="Weya Genesis - 5000 NFTs"/>
            </motion.div>
            <div className={s.content}>
              <div className={s.leftSide}>
                {/*<Image alt='Girl' src='/hero-images/girlHero.webp' width={452} height={493} priority/>*/}
                <video
                    style={{
                      width: '100%',
                      height: '463px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                      cursor: 'pointer',
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
                  <source src={require(`../../public/videos/thirdBlock.webm`)} type="video/webm"/>
                  Тег video не поддерживается вашим раузером.
                </video>
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