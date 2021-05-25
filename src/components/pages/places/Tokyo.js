import React from 'react';
import ImageSlider from '../../ImageSlider';
import IntroCard from '../../IntroCard';
import '../../../App.css';

function Tokyo() {
    return (
        <div className='main-container place'>
            <ImageSlider place='Tokyo' />
            <IntroCard 
                title='Why Go To Tokyo' 
                firstP='"Animated" is perhaps the best word to describe Tokyo. 
                    Crazy about its anime, Japan&apos;s mega city is constantly buzzing with movement – feet clacking down sidewalks, 
                    cars zooming along streets, subway trains humming below ground, ships cruising in and out. 
                    And yet bright lights and loud signs beg you to pause, to break your motion for just one second to pray (oops, we mean pay) at the altar of consumerism. 
                    This is a city that feeds on motion and progress.'
                secondP='But when you want to stop in Tokyo, the city will certainly make it worth your while. 
                    The tech-savvy locals may whizz past the monuments and urban parks daily (except during the cherry blossom season when everyone floods the green space), 
                    but, we assure you, the museums and historical sites are world-class. Here, there are photos to be taken, sushi to be eaten and a lot of shopping to be done. 
                    So what are you waiting for? You better get a move on.'
            />
        </div>
    )
}

export default Tokyo
