import React, {useEffect, useRef, useState} from "react";
import s from "./DragobTabs.module.scss";
import DragonView from "../DragonView/DragonView";
import SwiperCore, {EffectFade, Navigation, Pagination, EffectCoverflow} from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import "swiper/css/pagination";

SwiperCore.use([EffectFade, Pagination, Navigation])




const DragonTabs = ({dragons}) => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
      <ul className={s.dragonTabs}>
        <DragonView  id={1}
                     text2={'2.Holders of the Weya Pets collection will receive 0.25 Solana cashback after purchasing at least 1 Weya Genesis NFT'}
                     text3={'3. Noticeable discount in the merch store'}
                     text={"1. Whitelist spot for the main Weya Genesis collection (considerable discount) with the option to mint 2 pieces in one wallet."}
                     img={'/hero-images/orandeDragon.webp'}/>
        <DragonView  id={2}

                     text2={'2.Giveaways for Weya Pets holders after the completion of collection sale with prizes such as iPhone, iPad, Sony PlayStation 5, Electric Scooter or money equivalent to these prizes.'}
                     text3={'3.Weya Pets NFT will be an essential piece to claim a free 3D metaverse ready model which will be an ambassador of well-known brands ( We will share more information very soon)'}
                     text={'1. Fantastically beautiful and very well-made PFP which will have a much higher price on the secondary market, given our rapid growth and expansion of the auditory.'}
                     img={'/hero-images/blueDragon.webp'}/>

        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
          <div className={s.swiperContent}>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
          </div>
         <div>
           <SwiperSlide className={s.swiperContent}>
             <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
           </SwiperSlide>
         </div>


        </Swiper>

        <div className={s.swiperNavPrevRef} ref={swiperNavPrevRef}></div>
        <div className={s.swiperNavNextRef} ref={swiperNavNextRef}></div>
      </ul>
  );
};

export default DragonTabs;