import React from "react";
import {partners} from "../../partners";
import Image from "next/image";
import {motion} from "framer-motion";
import s from "./OurPartners.module.scss";
import SwiperCore, {Navigation, Pagination} from "swiper";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import PartnersMob from "../PartnersMob/PartnersMob";

SwiperCore.use([Pagination, Navigation]);

const OurPartners = () => {
  return (
      <section className={s.ourPartners} id="page7">
        {/*<div className={s.ellips1}></div>*/}
        {/*<div className={s.ellips2}></div>*/}
        {/*<div className={s.ellips3}></div>*/}
        <div className={s.ourPartnersContainer}>
          <motion.h2
              initial={{
                opacity: 0,
              }}
              viewport={{once: false, amount: 0.5}}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              }}
              className={s.title}
          >
            Our partners
          </motion.h2>

          <Swiper slidesPerView={6} loop className={s.mySwiper} spaceBetween={20}>
            <SwiperSlide>
              <div className={s.swiperSlide1}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide2}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide3}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide4}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide5}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide6}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide1}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide2}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide3}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide4}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide5}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.swiperSlide6}><Image src='/adidas.svg' width={125} height={125} quality={100}
                                                    alt="Adidas"/></div>
            </SwiperSlide>


          </Swiper>
          <PartnersMob partners={partners}/>
        </div>
      </section>
  );
};

export default OurPartners;
