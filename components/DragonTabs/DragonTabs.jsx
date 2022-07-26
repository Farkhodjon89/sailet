import React, {useEffect, useRef, useState} from 'react';
import s from './DragobTabs.module.scss';
import DragonView from "../DragonView/DragonView";

const DragonTabs = ({dragons}) => {

  return (
      <ul className={s.dragonTabs}>
        {dragons.map(({id, title, text, img}) => (
            <DragonView key={id} id={id} title={title} text={text} img={img}/>
        ))}
      </ul>
  );
};

export default DragonTabs;