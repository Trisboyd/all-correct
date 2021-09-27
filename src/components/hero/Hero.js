import React from 'react';
import './Hero.css';
import HeroApexLegends from '../../images/hero__apex-legends.jpg';

function Hero() {
  return (
    <section className="hero">
      <img className="hero__image" src={HeroApexLegends} alt="" />
      <div className="hero__info-group">
        <h2 className="hero__title">
          We've localized <span className="hero__title-span">Apex Legends</span> game by Electronic
          Arts
        </h2>
        <div className="hero__menu">
          <div className="hero__carousel-buttons">
            <button className="hero__carousel-button" type="button" />
            <button className="hero__carousel-button" type="button" />
            <button className="hero__carousel-button" type="button" />
            <button className="hero__carousel-button" type="button" />
            <button className="hero__carousel-button" type="button" />
          </div>
          <p className="hero__projects-button">All projects ➡</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
