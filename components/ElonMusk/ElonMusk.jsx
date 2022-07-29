import React, {useState} from "react";
import s from "./ElonMusk.module.scss";
import Image from "next/image";

const images = [
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

];

const ElonMusk = () => {
  const [isActive, setActive] = useState(images[0].id);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setActive(isActive !== 0 ? isActive - 1 : 2);
    } else if (direction === "r") {
      setActive(isActive !== 2 ? isActive + 1 : 0);
    }
  };

  return (
      <section className={s.elonMusk} id="page6">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.elonMuskContainer}>
            <div className={s.arrowContainer} style={{left: 0}} onClick={() => handleArrow("l")}>
              <Image width={50} height={50} src="/arrowLeft.svg" alt=""/>
            </div>
            <div className={s.images}>
              <div className={s.activeImage}>
                <Image src={images[isActive].image} width={474} height={595} quality={100} alt="Active Image"/>
              </div>
              <div className={s.info}>
                <h4>{images[isActive].title}</h4>
                <p>{images[isActive].age}</p>
                <p>{images[isActive].text}</p>
              </div>
              <ul className={s.personWrapper}>
                {images
                    .filter((image) => image.id !== isActive)
                    .map((filteredImage) => (
                        <li key={filteredImage.id} className={s.element}>
                          <div className={s.remainingImages}>
                            <Image src={filteredImage.image} width={252} height={316} quality={100} alt="Active Image"/>
                          </div>
                        </li>
                    )).reverse()}
              </ul>
            </div>
            <div className={s.arrowContainer} style={{right: 0}} onClick={() => handleArrow("r")}>
              <Image width={50} height={50} src="/arrowRight.svg" alt=""/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ElonMusk;
