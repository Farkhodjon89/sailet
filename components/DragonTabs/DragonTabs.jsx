import React, {useState} from 'react';
import s from './DragobTabs.module.scss';
import Button from "../Button/Button";
import Image from 'next/image';
import _ from 'lodash';
import classnames from 'classnames'
import ReactFullpage from "@fullpage/react-fullpage";

const DragonTabs = ({dragons}) => {
  const [open, setOpen] = useState([])

  return (
      <ul className={s.dragonTabs}>
        {dragons.map(({id, title, text, img}) => (
            <li key={id} className={open.includes(id) ? classnames(s.dragonItem, s.tabsActive) : s.dragonItem}
                onClick={() => setOpen(_.xor(open, [id]))}>
              <div className={s.itemTop}>
                <div className={s.itemContent}>
                  <h3 className={s.itemTitle}>{title}</h3>
                  <div className={open.includes(id) ? s.itemDetails : s.hidden}>
                    <p className={s.text}>{text}</p>
                    <Button/>
                  </div>
                </div>
                <div className={s.itemImage}>
                  <Image alt='Dragon' src={img}
                         width={open.includes(id) ? 430 : 230}
                         height={open.includes(id) ? 468 : 250} priority
                  />
                </div>
              </div>
            </li>

        ))}


      </ul>
  );
};

export default DragonTabs;