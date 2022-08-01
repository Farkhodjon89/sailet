import React from "react";
import s from "./Collaboration.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Navbar from "../NavigationBar/Navbar";
import {motion} from "framer-motion";
import triangle from "../../public/Triangle.svg";
import Image from "next/image";

const Collaboration = ({}) => {
  return (
      <section className={s.collaboration}>
        <div className="video-background">
          <div className="video-foreground">
            <iframe
                src="https://www.youtube.com/embed/MmIz9z52FYo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=MmIz9z52FYo"
                frameBorder="0" allowFullScreen allow="autoplay"></iframe>
          </div>
        </div>

        {/*<div className="video-background-mobile">*/}
        {/*  <div className="video-foreground-mobile">*/}
        {/*    <iframe*/}
        {/*        src="https://www.youtube.com/embed/MmIz9z52FYo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=MmIz9z52FYo"*/}
        {/*        frameBorder="0" allowFullScreen allow="autoplay"></iframe>*/}
        {/*  </div>*/}
        {/*</div>*/}


        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.collaborationContainer}>
            <motion.a
                initial={{x: 400, y: 350}}
                animate={{x: 0, y: 0}}
                transition={{delay: 0.5, duration: 0.5}}
                href="/" className={s.logo}>
              weyaland
            </motion.a>

            <div className={s.content}>
              <motion.div
                  initial={{
                    y: -1000,
                  }}
                  animate={{y: 0}}
                  transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}
              >
                <SectionTitle title="Collaboration is priceless"/>
              </motion.div>

              <motion.p
                  initial={{
                    x: -1500,
                  }}
                  animate={{x: 0}}
                  transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}
                  className="text"
              >
                As a team, we clearly understand that if we want to build
                something unique like a well-known IRL/Metaverse brand, we have to
                work with each other and the leaders in the field. We are not
                alone, and we can go even further by collaborating. One of our
                most vital principles is sustainable and rapid growth. With your
                participation and help, our opportunities in this field are just
                infinite
              </motion.p>
              <motion.div
                  initial={{
                    y: 1000,
                  }}
                  animate={{y: 0}}
                  transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}
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