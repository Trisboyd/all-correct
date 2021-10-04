import React from 'react';

import '../blocks/service-item/service-item.css';


import game1 from '../images/game1.png';
import game2 from '../images/game2.png';
import game3 from '../images/game3.png';
import game4 from '../images/game4.png';

export default function ServiceItem({element}) {

    const [display, setDisplay] = React.useState('none');
    const [border, setborder] = React.useState('#fff 1px solid')
    const [rotate, setRotate] = React.useState('rotate(0turn)')

    function handleClick() {
        setDisplay(display === 'none' ? 'flex' : 'none');
        setborder(border === '#fff 1px solid' ? 'none' : '#fff 1px solid');
        setRotate(rotate === 'rotate(0turn)' ? 'rotate(0.25turn)' : 'rotate(0turn)');
    }

    return (
        <div className='service-item'>
        <div className='service-item__top' onClick={() => handleClick()} style={{ borderBottom: `${border}` }}>
            <h3 className='service-item__top__title'>{element.service}</h3>
            <div className='service-item__top__arrow' style={{ transform: `${rotate}` }}>
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2955 23.2727L35.75 11.8182L24.2955 0.363636L21.6591 2.97727L28.5795 9.89773H0V13.7386H28.5795L21.6591 20.6477L24.2955 23.2727Z" fill="#4A8EFF" />
                </svg>
            </div>
        </div>
        <div className='services__bottom-wrapper' style={{ display: `${display}` }}>
            <p className='services__bottom-wrapper__text'>
                1. Initial cosmetic testing, which involves checking the game to ensure that its text displays correctly. Our experts use the results of the cosmetic test to send the customer a detailed report which includes information about all errors and defects present. <br />
                <br />
                2.  Full localization testing: checking the game for semantic, grammatical, orthographic and punctuation errors, typos and incorrectly displayed text. After the customer introduces corrections based on the report, our testers go through the game again using a set script to check whether all the changes were correctly introduced to the game. This stage is called regression testing.<br />
                <br />
                3. Functional testing, which determine the stability of the game or software product by checking the crucial functionality of the application.<br />
                <br />
                4. Compliance and compatibility testing. Quality assurance across multiple supported platforms – PC, Android, iOS. We cover more than 22 languages and more than 200 platforms at once for you to pass any featuring tests!
            </p>
            <div className='services__bottom-wrapper__image-grid'>
                <div className='services__image-card'>
                    <img className='services__image-card__image'
                        src={game1}
                        alt='Game 1'
                    />
                    <p className='services__image-card__text'>
                        <span>The long journey home</span> by Deadalic Entertainment
                    </p>
                </div>
                <div className='services__image-card'>
                    <img className='services__image-card__image'
                        src={game2}
                        alt='Game 1'
                    />
                    <p className='services__image-card__text'>
                        <span>The long journey home</span> by Deadalic Entertainment
                    </p>
                </div>
                <div className='services__image-card'>
                    <img className='services__image-card__image'
                        src={game3}
                        alt='Game 1'
                    />
                    <p className='services__image-card__text'>
                        <span>The long journey home</span> by Deadalic Entertainment
                    </p>
                </div>
                <div className='services__image-card'>
                    <img className='services__image-card__image'
                        src={game4}
                        alt='Game 1'
                    />
                    <p className='services__image-card__text'>
                        <span>The long journey home</span> by Deadalic Entertainment
                    </p>
                </div>
            </div>

            <a href='#' className='services__link'>All localization and functional game testing projects {'->'}</a>
        </div>
    </div>
    )
}