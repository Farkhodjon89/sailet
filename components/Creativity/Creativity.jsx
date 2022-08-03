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

  // const slides = []
  //
  // for (let i = 0; i <= 3; i++) {
  //   slides.push(
  //       <SwiperSlide key={i}>
  //         <p className={s.slideText}
  //            style={{maxWidth: '493px', fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: 'white'}}>
  //           We will make sure to facilitate and foster creativity in our community. Some of us are gifted at
  //           singing, some of us are gifted at the written word, while others are gifted in problem-solving or
  //           drawing. Show us how you can bring your creative mind to this project and family. Show us how you
  //           can grow collective creativity and bring value to our start-up. Let’s become a team to build the
  //           biggest brand and let’s make sure to do It as a collective, to do it as a community!
  //         </p>
  //         <Button text="Participate"/>
  //       </SwiperSlide>
  //   )
  // }

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
                    delay: 0.3,
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
                  <SwiperSlide >
                    <p className={s.slideText}
                       style={{maxWidth: '493px', fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: 'white'}}>
                      Hello dear friend! Our story begins on the planet Weya. The place is surrounded by mystery, magic, and unbelievable beauty. You undoubtedly will love it there. Moreover, you will discover many new things and find lots of trusted friends.

                      Weya is a homeland of many races and unique beasts, as well as flora and fauna that you have never seen before.
                      Weya is a place where you can meet the most incredible and fantastic characters. From majestic dragons to unique creatures from other dimensions that could have never imagined

                      The planet is full of breathtaking characters from different multiverses and far galaxies.

                      Weya is full of secrets and mysteries, so finding all the answers is nearly impossible

                      But the biggest mystery of Weya lies in the heart of this mighty planet, deep below the ground.
                    </p>
                    {/*<Button text="Participate"/>*/}
                  </SwiperSlide>
                  <SwiperSlide >
                    <p className={s.slideText}
                       style={{maxWidth: '493px', fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: 'white'}}>
                      The legends whisper that Weya was born from a cloud of life energy of all the creatures that ever existed. However, before the birth of Weya those living things existed in their own galaxies and dimensions without any possibility to communicate with each other

                      The energy was slowly accumulating from all over the galaxy. Years, decades, and centuries were passing, till it reached the point when this life energy had no more space to grow. Finally, this mass of energy just collapsed

                      А huge intergalactic explosion has breached the wall between dimensions leaving a massive glowing object right in front of the huge crack in the space matter. This fissure in the future became a door through which many newcomers will find their way to the world of Weya.

                      By the law of galaxy formation, various space bodies have started moving around this unusual glowing object and it became the core of a new planet, the planet of Weya.
                      The first-comers have named this monolith Neophalitis.
                      This monolith is the core of the planet. Moreover, its shards were scattered all around the planet and still hiding great mysteries and powers which are yet to discover.
                    </p>
                    {/*<Button text="Participate"/>*/}
                  </SwiperSlide>
                  <SwiperSlide >
                    <p className={s.slideText}
                       style={{maxWidth: '493px', fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: 'white'}}>
                      Each race has a unique bond with the power of Neophalitis. Therefore, depending on the origins of these creatures they can use only a fraction of the true power of this mighty stone.

                      However, this is just what legends tell us. Nobody knows the truth.

                      The first to discover Weya was the beautiful race of female elves. Very bright and friendly spirits of the forest possessed kind hearts and unbelievable beauty. The Weya elves as any elves have a distinct look – sharp ears and this unique glance that can enchant anybody from first sight.

                      It is just the beginning of the story, a fascinating adventure that will introduce you to the whole spectrum of life on planet Weya awaits for you just behind the corner.

                      Prepare for the most epic, adventurous time of your life through weya land

                      There are many stories of different Weya’s residents ahead and each of them is equally fascinating, surprising, and unique.

                      We truly believe that each of you will find your own hero on this mysterious planet. Not only a hero but a true friend, a real bond that will never leave you behind or upset you...WELCOME TO WEYALAND
                    </p>
                    {/*<Button text="Participate"/>*/}
                  </SwiperSlide>
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