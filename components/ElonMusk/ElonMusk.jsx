import React, {useEffect, useState} from "react";
import s from "./ElonMusk.module.scss";
import Image from "next/image";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


const ElonMusk = () => {

  const [value, setValue] = useState([
    {
      id: 0,
      title: "Elon Musk",
      age: "21 years old",
      text:
          "Has 4 years of project management" +
          " experience in marketing agencies in" +
          " kazakhstan. Has been in crypto for the last" +
          " 2 years, and believes crypto is the future." +
          " Now: working on the nft project and" +
          " roaming  the soil to find  his perfect match",
      image: "/ElonMusk/ElonMusk.png",
    },
    {
      id: 1,
      title: "Ronaldo",
      age: "21 years old",
      text:
          "Has 4 years of project management" +
          " experience in marketing agencies in" +
          " kazakhstan. Has been in crypto for the last" +
          " 2 years, and believes crypto is the future." +
          " Now: working on the nft project and" +
          " roaming  the soil to find  his perfect match",
      image: "/ElonMusk/Ronaldo.png",
    },
    {
      id: 2,
      title: "Messi",
      age: "21 years old",
      text:
          "Has 4 years of project management" +
          " experience in marketing agencies in" +
          " kazakhstan. Has been in crypto for the last" +
          " 2 years, and believes crypto is the future." +
          " Now: working on the nft project and" +
          " roaming  the soil to find  his perfect match",
      image: "/ElonMusk/Messi.png",
    },

  ])
  const [activeImage, setActiveImage] = useState(true)


  // console.log(activeImage)



  return (
      <section className={s.elonMusk} id="page6">
        <div className="container">
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
                slideShadows: false,
              }}
              // pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className={s.mySwiper}
          >
            {value.map(({id, text,image,age,title}) => (
                <>
                  <SwiperSlide className={s.swiperSlide}>
                    <div className={s.swiperImage}>
                      <Image width={500} height={600} src={image} alt="Team" />
                    </div>
                  </SwiperSlide>
                  <div className={s.info}>
                    <h4>{value[0].title}</h4>
                    <p>{value[0].age}</p>
                    <p>{value[0].text}</p>
                  </div>
                </>
            ))}

          </Swiper>
        </div>
      </section>
  );
};

export default ElonMusk;
