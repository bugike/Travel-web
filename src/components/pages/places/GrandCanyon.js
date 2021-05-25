import React from 'react';
import ImageSlider from '../../ImageSlider';
import IntroCard from '../../IntroCard';
import '../../../App.css';



function GrandCanyon() {
    return (
        <div className='main-container place'>
            <ImageSlider place='GrandCanyon' />
            <IntroCard 
                title='Why Go To Grand Canyon' 
                firstP='"Grand" does not begin to do this canyon justice. 
                    Measuring approximately 277 river miles in length, up to 18 miles in width and a mile deep, this massive chasm in northern Arizona is truly a natural wonder. 
                    For six million years, the Grand Canyon has expanded with the help of the mighty Colorado River, and for centuries, people from all over the globe have traveled to gaze out over its red and orange grandeur. 
                    Managed by the National Park Service and officially designated as a UNESCO World Heritage site, the Grand Canyon leaves its approximately 6 million visitors per year awestruck.'
                secondP='But if you are seeking a secluded escape to Mother Nature, you should be prepared: The Grand Canyon can be very crowded. 
                    The South Rim – home to the Grand Canyon Village and the well-worn Bright Angel Trail – is particularly popular for sightseers and hikers. It is on this side that you will find the most amenities. 
                    For a break from the crowds, head to the North Rim. This is the place for backwoods camping and hardcore hiking. 
                    And for an unforgettable view of the canyon, consider signing up for a helicopter tour.'
            />
        </div>
    )
}

export default GrandCanyon;
