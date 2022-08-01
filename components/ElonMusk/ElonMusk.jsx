import React, {useEffect, useState} from "react";
import s from "./ElonMusk.module.scss";
import Image from "next/image";
import classnames from "classnames";


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

  const swap = (dir = "left") => {
    const [first, ...rest] = value;
    const last = value.slice(-1);
    setValue(
        dir === "left" ? [...last, ...value.slice(0, -1)] : [...rest, first]
    );
    setActiveImage(true)
  };

  return (
      <section className={s.elonMusk} id="page6">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.elonMuskContainer}>
            <div className={s.arrowContainer} style={{left: '-3%'}} onClick={() => swap()}>
              <Image width={50} height={50} src="/arrowLeft.svg" alt=""/>
            </div>
            <div className={s.images}>
              <ul className={s.personWrapper}>
                {value.map((filteredImage, index) => (
                        <li key={filteredImage.id} className={s.element}>
                          <div className={classnames(index === 0 ? s.scaleImage : s.activeImage)}>
                            <Image src={filteredImage.image} width={252}
                                   height={316} quality={100} alt="Active Image"/>
                          </div>
                        </li>
                    ))}
              </ul>
              <div className={s.info}>
                <h4>{value[0].title}</h4>
                <p>{value[0].age}</p>
                <p>{value[0].text}</p>
              </div>
            </div>
            <div className={s.arrowContainer} style={{right: '-3%'}} onClick={() => swap("right")}>
              <Image width={50} height={50} src="/arrowRight.svg" alt=""/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ElonMusk;
