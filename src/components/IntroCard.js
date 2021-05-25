import React from 'react';
import { Link } from 'react-router-dom';
import './IntroCard.css';

function IntroCard({title, firstP, secondP, thirdP}) {
    return (
        <div className='intro-container'>
            <h1>{title}</h1>
            <p>{firstP}</p>
            <br></br>
            <p>{secondP}</p>
            <br></br>
            <p>{thirdP}</p>
            <div className='inline-link'>
                <Link to='/sign-up' className='sign-up-text'>Sign up for a trip!</Link>
                <Link to='/adventure' className='go-back-text'>Go back</Link>
            </div>
        </div>
    );
}

export default IntroCard;
