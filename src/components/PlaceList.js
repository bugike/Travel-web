import React from 'react';
import ListItem from './ListItem';
import './PlaceList.css';

function PlaceList() {
    return (
        <div className='main-container'>
            <h1>Adventure</h1>
            <ListItem 
            src='images/grand-canyon/1.jpg'
            path='/grand-canyon' 
            title='Grand Canyon'
            text='Located in Arizona, Grand Canyon National Park encompasses 277 miles (446 km) of the Colorado River and adjacent uplands. 
                The park is home to much of the immense Grand Canyon; a mile (1.6 km) deep, and up to 18 miles (29 km) wide. 
                Layered bands of colorful rock reveal millions of years of geologic history. Grand Canyon is unmatched in the incomparable vistas it offers visitors from the rim.'
            />
            <ListItem 
            src='images/london/1.jpg'
            path='/london' 
            title='London'
            text='London, city, capital of the United Kingdom. 
                It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. 
                By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural centre.'
            />
            <ListItem 
            src='images/maui/1.jpg'
            path='/maui' 
            title='Maui'
            text='Maui, known also as “The Valley Isle,” is the second largest Hawaiian island. 
                The island beloved for its world-famous beaches, the sacred Iao Valley, views of migrating humpback whales (during winter months), 
                farm-to-table cuisine and the magnificent sunrise and sunset from Haleakala. It’s not surprising Maui has been voted "Best Island in the U.S." 
                by Condé Nast Traveler readers for more than 20 years.'
            />
            <ListItem 
            src='images/tokyo/1.jpg'
            path='/tokyo' 
            title='Tokyo'
            text='Tokyo, formerly (until 1868) Edo, city and capital of Tokyo to (metropolis) and of Japan. 
                It is located at the head of Tokyo Bay on the Pacific coast of central Honshu. 
                It is the focus of the vast metropolitan area often called Greater Tokyo, the largest urban and industrial agglomeration in Japan.'
            />
            <ListItem 
            src='images/bora-bora/1.jpg'
            path='/bora-bora' 
            title='Bora Bora'
            text='Just-enhanced overwater bungalow suites, beachfront villa estates and underwater adventures welcome you at this sand-fringed idyll in the shadow of Bora Bora’s Mount Otemanu. 
                Toast sunsets from your private plunge pool, marvel at the Tahitian night sky, or simply lose yourself in our lagoon, 
                where the waters teem with exotic reef fish and colourful corals.'
            />
        </div>
    )
}

export default PlaceList
