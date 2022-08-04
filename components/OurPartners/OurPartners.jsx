import React from "react";
import { partners } from "../../partners";
import Image from "next/image";
import { motion } from "framer-motion";
import s from "./OurPartners.module.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
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
          viewport={{ once: false, amount: 0.5 }}
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
          {partners.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <div className={s.swiperSlide}>
                <Image
                  src={img}
                  width={125}
                  height={125}
                  quality={100}
                  alt="Adidas"
                />
              </div>
              {/*<div className={s.counter}>{id}</div>*/}
            </SwiperSlide>
          ))}
        </Swiper>
        <PartnersMob partners={partners} />
      </div>
    </section>
  );
};

export default OurPartners;
