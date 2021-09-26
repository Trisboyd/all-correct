import React from 'react';

export default function Navigation(props) {

    return (
        <nav className='navigation'>
            <ul className='navigation__links'>
                <li className='navigation__item'>
                    <a className='navigation__link'
                        href='/portfolio'>Portfolio</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'
                        href='/about-us'>About us</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'
                        href='/services'>Services</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'
                        href='/pricing'>Pricing</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'
                        href='/blog'>Blog</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'
                        href='/join-us'>Join us</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link navigation__link_blue'
                        href='/get-in-touch'>Get in touch</a>
                </li>
            </ul>
        </nav>
    )
}