import React, {useState} from 'react';
import s from './DragobTabs.module.scss';
import Button from "../Button/Button";
import Image from 'next/image';
import _ from 'lodash';
import classnames from 'classnames'

const DragonTabs = () => {
  const [open, setOpen] = useState([])

  return (
      <ul className={s.dragonTabs}>
        <li className={open.includes(1) ? classnames(s.dragonItem, s.tabsActive) : s.dragonItem}
            onClick={() => setOpen(_.xor(open, [1]))}>
          <div className={s.itemTop}>
            <div className={s.itemContent}>
              <h3 className={s.itemTitle}>Kindness 2</h3>
              <div className={open.includes(1) ? s.itemDetails : s.hidden}>
                <p className={s.text}>
                  Kindness was often seen as a weakness. But we don't think so. Kindness is a fundamental trait that was
                  uniting and shaped humanity throughout the ages. Moreover, kindness is not just helping each other
                  like answering questions, guiding newcomers, and being responsible and proactive. It is something much
                  bigger, it is a true belief, belief in people around you, belief in things that others carry about.
                </p>
                <Button/>
              </div>
            </div>

            <div className={s.itemImage}>
              <Image alt='Dragon' src='/hero-images/orandeDragon.png'
                     width={open.includes(1) ? 430 : 230}
                     height={open.includes(1) ? 468 : 250} priority
              />
            </div>
          </div>
        </li>
        <li className={open.includes(2) ? classnames(s.dragonItem, s.tabsActive) : s.dragonItem}
            onClick={() => setOpen(_.xor(open, [2]))}>
          <div className={s.itemTop}>
            <div className={s.itemContent}>
              <h3 className={s.itemTitle}>Kindness 3</h3>
              <div className={open.includes(2) ? s.itemDetails : s.hidden}>
                <p className={s.text}>
                  Kindness was often seen as a weakness. But we don't think so. Kindness is a fundamental trait that was
                  uniting and shaped humanity throughout the ages. Moreover, kindness is not just helping each other
                  like answering questions, guiding newcomers, and being responsible and proactive. It is something much
                  bigger, it is a true belief, belief in people around you, belief in things that others carry about.
                </p>
                <Button/>
              </div>
            </div>
            <div className={s.itemImage}>
              <Image alt='Dragon' src='/hero-images/blueDragon.png' width={open.includes(2) ? 430 : 230}
                     height={open.includes(2) ? 468 : 250} priority/>
            </div>
          </div>
        </li>
        <li className={open.includes(3) ? classnames(s.dragonItem, s.tabsActive) : s.dragonItem}
            onClick={() => setOpen(_.xor(open, [3]))}>
          <div className={s.itemTop}>
            <div className={s.itemContent}>
              <h3 className={s.itemTitle}>Kindness 4</h3>
              <div className={open.includes(3) ? s.itemDetails : s.hidden}>
                <p className={s.text}>
                  Kindness was often seen as a weakness. But we don't think so. Kindness is a fundamental trait that was
                  uniting and shaped humanity throughout the ages. Moreover, kindness is not just helping each other
                  like answering questions, guiding newcomers, and being responsible and proactive. It is something much
                  bigger, it is a true belief, belief in people around you, belief in things that others carry about.
                </p>
                <Button/>
              </div>
            </div>
            <div className={s.itemImage}>
              <Image alt='Dragon' src='/hero-images/dragon.png'
                     width={open.includes(3) ? 430 : 230}
                     height={open.includes(3) ? 468 : 250} priority
              />
            </div>
          </div>
        </li>
      </ul>
  );
};

export default DragonTabs;