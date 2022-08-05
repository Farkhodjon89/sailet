import React, {useEffect, useRef, useState} from "react";
import s from "./ElonMusk.module.scss";
import Image from "next/image";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";





const ElonMusk = () => {
  const [activeImage, setActiveImage] = useState(true)


  return (
      <section className={s.elonMusk} id="page6">
        <div className="container">
          <div className={s.swiperContainer}>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={s.mySwiper}
            >
              <SwiperSlide className={s.swiperSlide}>
                <div className={s.content}>
                  <div className={s.image}>
                    <Image width={400} height={400} src='/ElonMusk/firstjpg.webp' />
                  </div>
                  <div>Elena - Founder & CEO</div>
                </div>

              </SwiperSlide>
              <SwiperSlide className={s.swiperSlide}>
                <div className={s.content}>
                  <div className={s.image}>
                    <Image width={400} height={400} src='/ElonMusk/second.webp' />
                  </div>
                  <div>Taras - Co-founder & COO</div>
                </div>

              </SwiperSlide>
              <SwiperSlide className={s.swiperSlide}>
                <div className={s.content}>
                  <div className={s.image}>
                    <Image width={400} height={400} src='/ElonMusk/third.webp' />
                  </div>
                  <div>Daniil - Lead Marketing & Development</div>
                </div>

              </SwiperSlide>
              <SwiperSlide className={s.swiperSlide}>
                <div className={s.content}>
                  <div className={s.image}>
                    <Image width={400} height={400} src='/ElonMusk/fourth.webp' />
                  </div>
                  <div>Many Wayne - 3D Design & Artist</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>



        </div>
      </section>
  );
};

export default ElonMusk;
