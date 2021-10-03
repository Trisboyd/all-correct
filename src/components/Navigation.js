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
                    <a className='navigation__link'
                        href='/get-in-touch'>
                        <span className='navigation__link_blue'>Get in touch</span>
                        {/* this button needs to have functionality for opening the get-in-touch form added */}
                    </a>
                </li>
            </ul>
        </nav>
    )
}