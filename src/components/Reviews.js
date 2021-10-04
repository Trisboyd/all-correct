import React from 'react';

import '../blocks/reviews/reviews.css';

import eaLogo from '../images/ealogo.png';

const reviewsContent = [
    {
        text: 'Thank you and the entire team so, so much – just from the delivered files alone, I can see the amount of hard work, care and love that went into this project from your side. It’s been a real pleasure working together so far, and I hope there are many more collaborations to come! It’s been a real pleasure working together so far, and I hope there are many more collaborations en a real pleasure working together so far, and I hope there are many more en a real',
        company: 'EA Games',
        logo: eaLogo
    },
    {
        text: 'Thank you and the entire team so, so much – just from the delivered files alone, I can see the amount of hard work, care and love that went into this project from your side. It’s been a real pleasure working together so far, and I hope there are many more collaborations to come! It’s been a real pleasure working together so far, and I hope there are many more collaborations en a real pleasure working together so far, and I hope there are many more en a real',
        company: 'EA Games',
        logo: eaLogo
    },
    {
        text: 'Thank you and the entire team so, so much – just from the delivered files alone, I can see the amount of hard work, care and love that went into this project from your side. It’s been a real pleasure working together so far, and I hope there are many more collaborations to come! It’s been a real pleasure working together so far, and I hope there are many more collaborations en a real pleasure working together so far, and I hope there are many more en a real',
        company: 'EA Games',
        logo: eaLogo
    },
]

export default function Reviews() {
    const carouselRef = React.useRef();

    React.useEffect(() => {
        if (carouselRef) {
            let isDown = false;
            let startX;
            let scrollLeft;
            let pressTimer;

            carouselRef.current.addEventListener("mousedown", (e) => {
                isDown = true;
                startX = e.pageX - carouselRef.current.offsetLeft;
                scrollLeft = carouselRef.current.scrollLeft;
                pressTimer = setTimeout(() => {
                    carouselRef.current.style.cursor = "grabbing";
                }, 100);
            });

            carouselRef.current.addEventListener("mouseleave", () => {
                isDown = false;
                carouselRef.current.style.cursor = "pointer";
                clearTimeout(pressTimer);
            });

            carouselRef.current.addEventListener("mouseup", () => {
                isDown = false;
                carouselRef.current.style.cursor = "pointer";
                clearTimeout(pressTimer);
            });

            carouselRef.current.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carouselRef.current.offsetLeft;
                const scrollX = (x - startX) * 1;

                carouselRef.current.style.scrollSnapType = "none";
                carouselRef.current.style.cursor = "grabbing";
                carouselRef.current.scrollLeft = scrollLeft - scrollX;
            });
        }
    }, []);

    return (
        <section className='reviews'>
            <h2 className='reviews__title'>Reviews</h2>
            <div ref={carouselRef} className='reviews__carousel'>
                {reviewsContent.map((element, i) => {
                    return (<div className='reviews__card'>
                        <p className='reviews__card-text'>{element.text}</p>
                        <div className='reviews__info-wrapper'>
                            <p className='reviews__info-wrapper__text'>{element.company}</p>
                            <img
                                className='reviews__info-wrapper__logo'
                                src={element.logo}
                                alt='Company Logo'
                            />
                        </div>
                    </div>)
                })}
            </div>
        </section>
    )
}