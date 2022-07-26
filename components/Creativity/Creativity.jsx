import React, {useRef} from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import s from './Creativity.module.scss'
import Image from 'next/image';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from "../Button/Button";

SwiperCore.use([Pagination, Navigation])

const Creativity = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  const slides = []

  for (let i = 0; i <= 3; i++) {
    slides.push(
        <SwiperSlide key={i}>
          <p className={s.slideText}
             style={{maxWidth: '493px', fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: 'white'}}>
            We will make sure to facilitate and foster creativity in our community. Some of us are gifted at
            singing, some of us are gifted at the written word, while others are gifted in problem-solving or
            drawing. Show us how you can bring your creative mind to this project and family. Show us how you
            can grow collective creativity and bring value to our start-up. Let’s become a team to build the
            biggest brand and let’s make sure to do It as a collective, to do it as a community!
          </p>
          <Button text="Participate"/>
        </SwiperSlide>
    )
  }

  return (
      <section className={s.creativity} id='page3'>
        <div className="container fix">
          <div className={s.creativityContainer}>
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
              <SectionTitle title="Creativity is a key to success"/>
            </motion.div>

            <div className={s.content}>
              <div className={s.leftSide}>
                <Image alt='Girl' src='/hero-images/girlHero.png' width={452} height={493} priority/>
              </div>
              <div className={s.rightSide}>
                <Swiper
                    modules={[Navigation]}
                    navigation
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
                  {slides}
                </Swiper>
                <div className={s.swiperNavPrevRef} ref={swiperNavPrevRef}></div>
                <div className={s.swiperNavNextRef} ref={swiperNavNextRef}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Creativity;