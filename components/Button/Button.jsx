import React from 'react';
import s  from './Button.module.scss';
import Link from "next/link";

const Button = ({text}) => {
  return (
      <div className={s.btnContainer}>
        <Link href='/'>
          <a>
            <div className={s.button}>
              Participate
            </div>
          </a>
        </Link>
      </div>

  );
};

export default Button;