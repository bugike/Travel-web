import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards_container">
                <div className="cards_warpper">
                    <ul className="cards_items">
                        <CardItem src='images/grand-canyon/1.jpg' 
                        text='Enjoy the amazing view of the Grand Canyon'
                        label='United State'
                        path='/grand-canyon' />
                        <CardItem src='images/london/1.jpg' 
                        text='Explore the mysteries of London'
                        label='United Kingdom'
                        path='/london' />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem src='images/maui/1.jpg' 
                        text='Head to the Maui for sun, sea and sand'
                        label='Hawaii'
                        path='/maui' />
                        <CardItem src='images/tokyo/1.jpg' 
                        text='Experience the mysterious culture from the East'
                        label='Japan'
                        path='/tokyo' />
                        <CardItem src='images/bora-bora/1.jpg' 
                        text='Enjoy the picturesque beaches, lush jungles and luxurious resorts in Bora Bora'
                        label='French Polynesia'
                        path='/bora-bora' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
