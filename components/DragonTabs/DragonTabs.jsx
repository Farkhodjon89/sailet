import React, {useEffect, useRef, useState} from "react";
import s from "./DragobTabs.module.scss";
import DragonView from "../DragonView/DragonView";
import SwiperCore, {EffectFade, Navigation, Pagination, EffectCoverflow} from "swiper";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {motion} from "framer-motion";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import "swiper/css/pagination";

SwiperCore.use([EffectFade, Pagination, Navigation])


const DragonTabs = ({dragons}) => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
      <ul className={s.dragonTabs}>
        <DragonView id={1}
                    text2={'2.Holders of the Weya Pets collection will receive 0.25 Solana cashback after purchasing at least 1 Weya Genesis NFT'}
                    text3={'3. Noticeable discount in the merch store'}
                    text={"1. Whitelist spot for the main Weya Genesis collection (considerable discount) with the option to mint 2 pieces in one wallet."}
                    img={'/hero-images/orandeDragon.webp'}/>
        <DragonView id={2}

                    text2={'5.Giveaways for Weya Pets holders after the completion of collection sale with prizes such as iPhone, iPad, Sony PlayStation 5, Electric Scooter or money equivalent to these prizes.'}
                    text3={'6.Weya Pets NFT will be an essential piece to claim a free 3D metaverse ready model which will be an ambassador of well-known brands ( We will share more information very soon)'}
                    text={'4. Fantastically beautiful and very well-made PFP which will have a much higher price on the secondary market, given our rapid growth and expansion of the auditory.'}
                    img={'/hero-images/blueDragon.webp'}/>
        <motion.li
            initial={{
              opacity: 0,
            }}
            viewport={{once: false, amount: 0.7}}
            whileInView={{
              opacity: 1,
            }}
            transition={{delay: 0.1}}
            className={s.swiperContainer}
        >

          <Swiper
              effect={"coverflow"}
              grabCursor={true}
              navigation={{
                prevEl: swiperNavPrevRef.current,
                nextEl: swiperNavNextRef.current
              }}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = swiperNavPrevRef.current
                swiper.params.navigation.nextEl = swiperNavNextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={s.mySwiper}
          >
            <div className={s.swiperContent}>
              <SwiperSlide>
                <div className={s.slide}>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                </div>
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide className={s.swiperContent}>
                <div className={s.slide}>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className={s.swiperNavPrevRef} ref={swiperNavPrevRef}></div>
          <div className={s.swiperNavNextRef} ref={swiperNavNextRef}></div>
        </motion.li>
      </ul>
  );
};

export default DragonTabs;