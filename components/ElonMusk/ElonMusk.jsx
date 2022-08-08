import s from "./ElonMusk.module.scss";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import {people} from '../../people';

import {EffectCards} from "swiper";


const ElonMusk = () => {


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
              {people.map(({id, src, name}) => (
                  <SwiperSlide key={id} className={s.swiperSlide}>
                    <div className={s.content}>
                      <div className={s.image}>
                        <Image width={400} height={400} src={`/ElonMusk/${src}`}/>
                      </div>
                      <div>{name}</div>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  );
};

export default ElonMusk;
