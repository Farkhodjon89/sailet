import React from 'react';
import s from './PartnersMob.module.scss';
import Image from "next/image";

const PartnersMob = ({partners}) => {

  return (
      <ul className={s.partnersMobWrapper}>
        {partners.map(({id, img, background}) => (
            <li key={id} style={{background: background}} className={s.swiperSlide}>
              <Image src={img} width={78} height={78} quality={100} alt="Adidas"/>
            </li>
        ))}
      </ul>
  );
};

export default PartnersMob;