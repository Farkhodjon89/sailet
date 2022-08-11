import React, {useRef, useState} from 'react';
import s from './HeroesSlider.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import HeroItem from "../HeroItem/HeroItem";

SwiperCore.use([Pagination, Navigation])

const HeroesSlider = ({heroes}) => {
  const [activeCard, setActiveCard] = useState(null)

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
      <div className={s.swiperWrapper}>
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
          {heroes.map(({id, name, img, video, text}) => (
              <SwiperSlide key={id}>
                <div className={s.image} onClick={() => setActiveCard(id)}>
                  <Image quality={100} src={img} width={330} height={390} alt="Heros"/>
                </div>
                {/*<div className={s.heroName}>{name}</div>*/}
                {activeCard &&
                <HeroItem id={id} name={name} slider='slider' video={video} text={text} img={img} hero={activeCard} setHero={setActiveCard}/>}
              </SwiperSlide>

          ))}

        </Swiper>
        <div className={s.swiperNavPrevRef} ref={swiperNavPrevRef}></div>
        <div className={s.swiperNavNextRef} ref={swiperNavNextRef}></div>
      </div>

  );
};

export default HeroesSlider;