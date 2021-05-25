import React from 'react'
import ImageSlider from '../../ImageSlider';
import IntroCard from '../../IntroCard';
import '../../../App.css';

function BoraBora() {
    return (
        <div className='main-container place'>
            <ImageSlider place='BoraBora' />
            <IntroCard 
                title='Why Go To Bora Bora' 
                firstP='The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. 
                    A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon. 
                    In fact, author James Michener, who wrote "Tales of the South Pacific," called Bora Bora "the most beautiful island in the world." 
                    The 18th-century British explorer James Cook even coined it as the "Pearl of the Pacific." 
                    The very definition of a tropical getaway, blissful Bora Bora abounds with luxurious resorts, sunny skies, warm waters and friendly locals.'
                secondP='And as you might&apos;ve already guessed, the main industry on this petite island in French Polynesia and its swarm of tiny motu (islands) is tourism. 
                    To that end, you can snorkel, explore Vaitape (Bora Bora&apos;s main port), hike Mount Otemanu and more. But there&apos;s a catch: Bora Bora is expensive – very expensive. 
                    In short, visit Bora Bora for natural beauty, visit for utter relaxation and visit if you have the money.'
            />
        </div>
    )
}

export default BoraBora
