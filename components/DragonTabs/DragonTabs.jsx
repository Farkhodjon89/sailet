import React, { useEffect, useRef, useState } from "react";
import s from "./DragobTabs.module.scss";
import DragonView from "../DragonView/DragonView";

const DragonTabs = ({ dragons }) => {
  return (
    <ul className={s.dragonTabs}>
      {dragons.map(({ id, title, text, img, text2, text3 }) => (
        <DragonView key={id} id={id} title={title} text2={text2} text3={text3} text={text} img={img} />
      ))}
    </ul>
  );
};

export default DragonTabs;