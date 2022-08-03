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
      <>
        <section className={s.collaboration}>
          {/*<video*/}
          {/*    style={{*/}
          {/*      position: 'absolute',*/}
          {/*      top: 0,*/}
          {/*      left: 0,*/}
          {/*      width: '100%',*/}
          {/*      height: '100%',*/}
          {/*      objectFit: 'cover',*/}
          {/*      zIndex: -1,*/}
          {/*      outline: 'none',*/}
          {/*    }}*/}
          {/*    tabIndex="-1"*/}
          {/*    preload="none"*/}
          {/*    autoPlay*/}
          {/*    muted*/}
          {/*    loop*/}
          {/*    playsInline*/}
          {/*    webkit-playinginline="true"*/}
          {/*    poster=""*/}
          {/*>*/}
          {/*  <source src={require('../../public/videos/videoplayback.mp4')} type="video/mp4"/>*/}
          {/*  Тег video не поддерживается вашим раузером.*/}
          {/*</video>*/}
          {/*<div className={s.ellips1}></div>*/}
          {/*<div className={s.ellips2}></div>*/}
          {/*<div className={s.ellips3}></div>*/}
          <div className="container">
            <div className={s.collaborationContainer}>
              <motion.a
                  initial={{
                    y: -1000,
                  }}
                  animate={{y: 0}}
                  transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}
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
                  <SectionTitle title="Feel yourself at home since Weya is your new home"/>
                </motion.div>

                {/*<motion.p*/}
                {/*    initial={{*/}
                {/*      x: -1500,*/}
                {/*    }}*/}
                {/*    animate={{x: 0}}*/}
                {/*    transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}*/}
                {/*    className="text"*/}
                {/*>*/}
                {/*  As a team, we clearly understand that if we want to build*/}
                {/*  something unique like a well-known IRL/Metaverse brand, we have to*/}
                {/*  work with each other and the leaders in the field. We are not*/}
                {/*  alone, and we can go even further by collaborating. One of our*/}
                {/*  most vital principles is sustainable and rapid growth. With your*/}
                {/*  participation and help, our opportunities in this field are just*/}
                {/*  infinite*/}
                {/*</motion.p>*/}
                {/*<motion.div*/}
                {/*    initial={{*/}
                {/*      y: 1000,*/}
                {/*    }}*/}
                {/*    animate={{y: 0}}*/}
                {/*    transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}*/}
                {/*>*/}
                {/*  <Button text="Participate"/>*/}
                {/*</motion.div>*/}

                <Navbar/>
              </div>
            </div>
          </div>
        </section>
      </>

  );
};

export default Collaboration;