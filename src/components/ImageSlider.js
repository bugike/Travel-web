import React, { useState, useEffect } from 'react';
import {GrandCanyon, BoraBora, London, Maui, Tokyo} from './PlaceData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './ImageSlider.css';



function ImageSlider({place}){
    var currPlace;
    const [curr, setCurr] = useState(0);

    if (place === 'GrandCanyon') 
        currPlace = GrandCanyon;
    else if (place === 'BoraBora')   
        currPlace = BoraBora;
    else if (place === 'London')                           
        currPlace = London;
    else if (place === 'Maui')
        currPlace = Maui;
    else if (place === 'Tokyo')
        currPlace = Tokyo;
    else {
        throw new Error('No such a place!');
    }
    const length = currPlace.length;

    useEffect(() => {
        const interval =
        setInterval(() => {
            setCurr((prevCurr) => {
                return (prevCurr === length - 1? 0 : prevCurr + 1);
            }
            );
        }, 8000);
        return () => clearInterval(interval);
    }, []);
    
    if(!Array.isArray(currPlace) || length <= 0)   return null;

    const nextSlide = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    };

    const prevSlide = () => {
        setCurr(curr === 0 ? length - 1 : curr - 1);
    };

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow'  onClick={nextSlide}/>
            {currPlace.map((slide, index) => {
                    return (
                        <div className={index === curr? 'slide-active' : 'slide-hidden'} key={index}>
                            {index === curr && (<img src={slide.image} alt='place images' />)}
                        </div>
                    );
                })
            }
        </section>
    );
    
}

export default ImageSlider;
