import React from "react";
import s from './Collaboration.module.scss';
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Navbar from "../NavigationBar/Navbar";

const Collaboration = ({}) => {

  return (
      <section className={s.collaboration} id='page2'>
        <div className="container">
          <div className={s.collaborationContainer}>
            <div className={s.content}>
              <SectionTitle title={`Collaboration is priceless`}/>
              <p className="text">
                As a team, we clearly understand that if we want to build something unique like a well-known
                IRL/Metaverse brand, we have to work with each other and the leaders in the field. We are not alone, and
                we can go even further by collaborating. One of our most vital principles is sustainable and rapid
                growth. With your participation and help, our opportunities in this field are just infinite
              </p>
              <Button/>
              <Navbar/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Collaboration;