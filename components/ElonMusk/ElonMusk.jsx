import React, {useState} from 'react';
import s from './ElonMusk.module.scss'
import Image from 'next/image';

const ElonMusk = () => {
  const [index, setIndex] = useState(0)

  const images = [
    {
      id: 0,
      image1: '/ElonMusk/ElonMusk.png',
      image2: '/ElonMusk/Ronaldo.png',
      image3: '/ElonMusk/Messi.png',
      text: 'Has 4 years of project management' +
          ' experience in marketing agencies in' +
          ' kazakhstan. Has been in crypto for the last' +
          ' 2 years, and believes crypto is the future.' +
          ' Now: working on the nft project and' +
          ' roaming  the soil to find  his perfect match',
      title: 'Elon Musk',
      age: '21 years old'
    },
    {
      id: 1,
      image1: '/ElonMusk/Ronaldo.png',
      image2: '/ElonMusk/Messi.png',
      image3: '/ElonMusk/ElonMusk.png',
      text: 'Has 4 years of project management' +
          ' experience in marketing agencies in' +
          ' kazakhstan. Has been in crypto for the last' +
          ' 2 years, and believes crypto is the future.' +
          ' Now: working on the nft project and' +
          ' roaming  the soil to find  his perfect match',
      title: 'Elon Musk',
      age: '21 years old'
    },
    {
      id: 2,
      image1: '/ElonMusk/Messi.png',
      image2: '/ElonMusk/ElonMusk.png',
      image3: '/ElonMusk/Ronaldo.png',
      text: 'Has 4 years of project management' +
          ' experience in marketing agencies in' +
          ' kazakhstan. Has been in crypto for the last' +
          ' 2 years, and believes crypto is the future.' +
          ' Now: working on the nft project and' +
          ' roaming  the soil to find  his perfect match',
      title: 'Elon Musk',
      age: '21 years old'
    }
  ]

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2)
    } else if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }


  return (
      <section className={s.elonMusk} id="page6">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.elonMuskContainer}>
            <div className={s.arrowContainer} style={{left: 0}} onClick={() => handleArrow('l')}>
              <Image width={50} height={50} src="/arrowLeft.svg" alt=""/>
            </div>
            <ul className={s.images} style={{transform: `translateX(${-100 * index}vw)`}}>
              {images.map(({id, image1, image2, image3, text, title}) => (
                  <li key={id} className={s.image}>
                    <div className={s.activeImage}>
                      <Image src={image1} width={474} height={595} quality={100} alt="Person"/>
                    </div>
                    <div>
                      <h4 className={s.title}>{title}</h4>
                      <p className={s.text}>{text}</p>
                      <div className={s.personWrapper}>
                        <div className={s.person}>
                          <Image src={image2} width={252} height={316} quality={100} alt="Person"/>
                        </div>
                        <div className={s.person}>
                          <Image src={image3} width={252} height={316} quality={100} alt="Person"/>
                        </div>
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
            <div className={s.arrowContainer} style={{right: 0}} onClick={() => handleArrow('r')}>
              <Image width={50} height={50} src="/arrowRight.svg" alt=""/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ElonMusk;