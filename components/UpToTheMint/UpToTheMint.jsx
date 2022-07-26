import React, {useRef} from 'react';
import s from './UpToTheMint.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {motion} from "framer-motion";
import classnames from "classnames";
import SectionTitle from "../SectionTitle/SectionTitle";
import {rollerData} from "../../rollerData";

SwiperCore.use([Pagination, Navigation])

const UpToTheMint = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
      <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current
          }}
          slidesPerView={1}
          loop
          className={s.mySwiper}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current
            swiper.params.navigation.nextEl = swiperNavNextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
      >
        <SwiperSlide>
          <section className={s.upToTheMintNight} id="page5">
            <div className="container">
              <div className={s.upToTheMintContainer}>
                <motion.div
                    initial={{
                      opacity: 0
                    }}
                    viewport={{once: false, amount: 0.5}}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                      }
                    }}
                >
                  <SectionTitle title='Up to the mint'/>
                </motion.div>
                <motion.div
                    initial={{
                      opacity: 0
                    }}
                    viewport={{once: false, amount: 0.3}}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                      }
                    }}
                    className={classnames(s.contentNight, s.contentNightAdditional)}
                >
                  <ul className={s.contentText}>
                    {rollerData.map(({id, title, text}) => (
                        <li key={id}>
                          <h4>{title}</h4>
                          <p>{text}</p>
                        </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={s.upToTheMintDay}>
            <div className="container">
              <div className={s.upToTheMintContainer}>
                <SectionTitle title='After mint'/>
                <motion.div
                    initial={{
                      opacity: 0
                    }}
                    viewport={{once: false, amount: 0.2}}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 0.7,
                      }
                    }}
                    className={classnames(s.contentDay, s.contentDayAdditional)}
                >
                  <ul className={s.contentText}>
                    {rollerData.map(({id, title, text}) => (
                        <li key={id}>
                          <h4>{title}</h4>
                          <p>{text}</p>
                        </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <div className={s.swiperNavPrevRef} ref={swiperNavPrevRef}></div>
        <div className={s.swiperNavNextRef} ref={swiperNavNextRef}></div>
      </Swiper>
  );
};

export default UpToTheMint;