import React from 'react';
import s from './Button.module.scss';

const Button = ({text}) => {
  return (
      <div className={s.btnContainer}>
        <button className={s.learnMore}>{text}</button>
      </div>
  );
};

export default Button;