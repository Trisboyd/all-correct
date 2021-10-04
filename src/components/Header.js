import React from 'react';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';

export default function Header() {

    // THIS CODE WON'T WORK UNTIL WE HAVE ROUTES IN APP.JS______________________________
    // once it does, it will set the subheading based on the location

    // const location = useLocation();

    // const subHeading = () => {
    //     const heading = location.pathname.replace('-', ' ');
    //     const capHeading = heading.slice(1).charAt(0).toUpperCase() + heading.slice(2);
    //     return capHeading;
    // }

    return (
        <section className='header'>
            <div className='page-info'>
                <h2 className='section-title'>
                    <span className='section-title_blue'>Allcorrect</span><br />
                    {/* {subHeading} */}
                </h2>
                <Navigation />
            </div>
        </section>
    )
}