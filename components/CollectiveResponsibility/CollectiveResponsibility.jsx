import React, {useState} from 'react';
import {heroes} from "../../responsibilityData";
import Image from 'next/image';
import s from './CollectiveResponsibility.module.scss'
import classnames from "classnames";
import _ from 'lodash';

const CollectiveResponsibility = () => {

  const [visible, setVisible] = useState([])

  // console.log(heroes)
  return (
      <section className={s.collectiveResponsibility} id="page4">
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <h2 className={s.title}>Collective responsibility</h2>
        <div className="container">
          <div className={s.collectiveResponsibilityContainer}>
            <ul className={s.heroesList}>
              {heroes.map(({id, name, img}) => (
                  <li key={id} className={s.heroItem}>
                    <div className={s.heroImage}
                         onMouseLeave={() => setVisible(_.xor(visible, [id]))}
                         onMouseEnter={() => setVisible(_.xor(visible, [id]))}
                    >
                      <Image quality={100} src={img} width={330} height={390} alt="Hero1"/>
                    </div>
                    <div className={visible.includes(id) ? classnames(s.heroIcon, s.visible) : s.heroIcon}>
                      <Image src='/eye.svg' width={100} height={50} quality={100} alt='Eye'/>
                    </div>
                    <div className={s.heroName}>{name}</div>
                  </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
  );
};

export default CollectiveResponsibility;