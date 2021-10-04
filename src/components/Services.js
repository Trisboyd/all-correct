import React from 'react';

import ServiceItem from './ServiceItem';

import '../blocks/services/services.css';


const servicesData = [
    {
        service: 'Lean game localization'
    },
    {
        service: 'Localization and functional game testing'
    },
    {
        service: 'Voiceovers'
    },
    {
        service: 'Game art',
    },

];

// const servicesOpenTab = [
//     {
//         text: '1. Initial cosmetic testing, which involves checking the game to ensure that its text displays correctly. Our experts use the results of the cosmetic test to send the customer a detailed report which includes information about all errors and defects present. <br /><br />2.  Full localization testing: checking the game for semantic, grammatical, orthographic and punctuation errors, typos and incorrectly displayed text. After the customer introduces corrections based on the report, our testers go through the game again using a set script to check whether all the changes were correctly introduced to the game. This stage is called regression testing.<br/><br/>3. Functional testing, which determine the stability of the game or software product by checking the crucial functionality of the application.<br/><br />4. Compliance and compatibility testing. Quality assurance across multiple supported platforms – PC, Android, iOS. We cover more than 22 languages and more than 200 platforms at once for you to pass any featuring tests!',
//     }
// ];

export default function Services() {

    return (
        <section className='services'>
            <h2 className='services__title'>Our services</h2>
            <div className='services__wrapper'>

                {servicesData.map((element, i) => {
                    return (
                        <ServiceItem
                            key={i}
                            element={element}
                        />
                    )
                })}

                {/* <div className='services__service'>
                    <div className='services__top-wrapper' onClick={() => handleClick()} style={{ borderBottom: `${border}` }}>
                        <h3 className='services__top-wrapper__title'>Lean game localization</h3>
                        <div className='services__top-wrapper__arrow' style={{ transform: `${rotate}` }}>
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
                </div> */}
            </div>
        </section>
    );
}