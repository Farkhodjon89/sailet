import React from 'react';
import s from "./Footer.module.scss";

const Footer = () => {
  return (
      <section className={s.footer}>
        <div className={s.ellips1}></div>
        <div className={s.ellips2}></div>
        <div className={s.ellips3}></div>
        <div className="container">
          <div className={s.footerContainer}>

          </div>

        </div>
      </section>
  );
};

export default Footer;