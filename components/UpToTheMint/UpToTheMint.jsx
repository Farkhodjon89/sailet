import React, {useRef, useState} from 'react';
import s from './UpToTheMint.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {motion} from "framer-motion";
import classnames from "classnames";
import SectionTitle from "../SectionTitle/SectionTitle";
import {rollerData, rollerData2} from "../../rollerData";

SwiperCore.use([EffectFade, Pagination, Navigation])

const UpToTheMint = () => {
  const [index, setIndex] = useState(0)
  console.log(index)

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  // console.log(swiperNavNextRef)

  return (
      <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current
          }}
          effect={"fade"}
          slidesPerView={1}
          speed={1500}
          loop
          className={s.mySwiper}
          onSlideChange={(props) => setIndex(props.activeIndex === 3 ? 1 : props.activeIndex === 0 ? 2 : props.activeIndex)}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current
            swiper.params.navigation.nextEl = swiperNavNextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
            console.log(swiper)

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
                        delay: 0.1,
                      }
                    }}
                >
                  <SectionTitle title='Up to the mint'/>
                </motion.div>
                <motion.div
                    initial={{
                      opacity: 0
                    }}
                    viewport={{once: false, amount: 0.2}}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                      }
                    }}
                    className={classnames(s.contentNight, s.contentNightAdditional)}
                >
                  {index === 1 &&
                  <video
                      style={{
                        width: '834px',
                        height: '1250px',
                        objectFit: 'cover',
                        position: 'absolute',
                        borderRadius: '30px',
                        zIndex: -1,
                        outline: 'none',
                      }}
                      tabIndex="-1"
                      preload="auto"
                      autoPlay
                      muted
                      playsInline
                      webkit-playinginline="true"
                      poster=""
                  >
                    <source src={require(`../../public/videos/scrollNight.webm`)} type="video/webm"/>
                    Тег video не поддерживается вашим раузером.
                  </video>}
                  <motion.ul
                      initial={{
                        opacity: 0
                      }}
                      viewport={{once: false}}
                      whileInView={{
                        opacity: 1,
                        transition: {
                          delay: 5.5,
                        }
                      }}
                      className={s.contentText}>
                    {rollerData.map(({id, title, text}) => (
                        <li key={id}>
                          {/*<h4>{title}</h4>*/}
                          <p>{text}</p>
                        </li>
                    ))}
                  </motion.ul>
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
                        delay: 0.1,
                      }
                    }}
                    className={classnames(s.contentDay, s.contentDayAdditional)}
                >
                  {index === 2 &&
                  <video
                      style={{
                        width: '834px',
                        height: '1250px',
                        objectFit: 'cover',
                        position: 'absolute',
                        borderRadius: '30px',
                        zIndex: -1,
                        outline: 'none',
                      }}
                      tabIndex="-1"
                      preload="none"
                      autoPlay
                      muted
                      playsInline
                      webkit-playinginline="true"
                      poster=""
                  >
                    <source src={require(`../../public/videos/scroll.webm`)} type="video/webm"/>
                    Тег video не поддерживается вашим раузером.
                  </video>}
                  <ul className={s.contentText}>
                    {rollerData2.map(({id, title, text}) => (
                        <li key={id}>
                          {/*<h4>{title}</h4>*/}
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