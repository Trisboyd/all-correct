import React from 'react';
import Navigation from './Navigation';
import facebook from "../images/facebook.png";
import linkedIn from '../images/linkedin.png';
import medium from '../images/medium.png';
import rss from '../images/Vector.png';

export default function Footer() {

    return (
        <section className='footer'>
            <div className='page-info'>
                <h2 className='section-title'>
                    <span className='section-title_blue'>Allcorrect</span><br />
                    Game outsourcing studio
                </h2>
                <Navigation />
            </div>
            <div className='footer__info'>
                <div className='footer__locations'>
                    <p className='footer__text'>IRELAND: <br />
                        66 Silken Vale, Maynooth, co. Kildare, <br />
                        Ireland W23 V3P2</p>
                    <p className='footer__text'>CANADA: <br />
                        119 Spadina Ave, Toronto, ON M6E3J3</p>
                    <p className='footer__text'>© Allcorrect Group 2006—2021, «Legal information»</p>
                </div>
                <p className='footer__text footer__text_website'>site@allcorrectgames.com</p>
                <ul className='footer__links'>
                    <li className='footer__item'>
                        <a className='footer__link' href=''>
                            <img className='footer__image'
                            src={facebook}
                            alt='social'></img>Facebook</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href=''>
                            <img className='footer__image' 
                            src={medium}
                            alt='social-icon'></img>Medium</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href=''>
                            <img className='footer__image'
                            src={linkedIn} 
                            alt='social-icon'></img>LinkedIn</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href=''>
                            <img className='footer__image'
                            src={rss} 
                            alt='social-icon'></img> 
                            RSS</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}