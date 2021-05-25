import React from 'react';
import { Button } from './Button';
import '../App.css';
import './TrailerSection.css';

function TrailerSection() {
    return (
        <div className='trailer-container'>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/Hfoi76YbnzA?controls=0" title="YouTube video player" frameborder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' linkTo='/sign-up'>Start your adventure!</Button>
        </div>
    );
}

export default TrailerSection;
