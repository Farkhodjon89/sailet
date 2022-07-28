import React from "react";
import s from './Collaboration.module.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Navbar from "../NavigationBar/Navbar";
import {motion} from "framer-motion";
import triangle from '../../public/Triangle.svg'
import Image from 'next/image';

const Collaboration = ({}) => {

  return (
      <section className={s.collaboration}>
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.collaborationContainer}>
            <div className={s.content}>
              <motion.div
                  initial={{
                    y: -1000
                  }}
                  animate={{y: 0}}
                  transition={{ ease: "easeOut", duration: 0.7 }}
              >
                <SectionTitle title="Collaboration is priceless"/>
              </motion.div>

              <motion.p
                  initial={{
                    x: -1000
                  }}
                  animate={{x: 0}}
                  transition={{ ease: "easeOut", duration: 0.7 }}
                  className="text">
                As a team, we clearly understand that if we want to build something unique like a well-known
                IRL/Metaverse brand, we have to work with each other and the leaders in the field. We are not alone, and
                we can go even further by collaborating. One of our most vital principles is sustainable and rapid
                growth. With your participation and help, our opportunities in this field are just infinite
              </motion.p>
              <motion.div
                  initial={{
                    y: 1000
                  }}
                  animate={{y: 0}}
                  transition={{ ease: "easeOut", duration: 0.7 }}
              >
                <Button text="Participate"/>
              </motion.div>

              <Navbar/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Collaboration;