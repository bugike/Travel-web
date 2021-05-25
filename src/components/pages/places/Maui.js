import React from 'react';
import ImageSlider from '../../ImageSlider';
import IntroCard from '../../IntroCard';
import '../../../App.css';

function Maui() {
    return (
        <div className='main-container place'>
            <ImageSlider place='Maui' />
            <IntroCard 
                title='Why Go To Maui' 
                firstP='Maui is not nearly as large as the Big Island, nor is it as small as Lanai, as bustling as Oahu or as quiet as Kauai. 
                    For many Hawaii vacationers, Maui is just right – offering a taste of just about everything the Aloha State has to offer, from impressive wildlife to intriguing history and culture. 
                    While on a visit here, you can shimmy alongside professional hula dancers, golf along coastal fairways, sail down a zip line, 
                    snorkel alongside five different types of sea turtles or simply lounge along some of Hawaii&apos;s most notable beaches.'
                secondP='One of the archipelago&apos;s most popular tourism spots, Maui can be found sandwiched between the Big Island and the much tinier Molokai (which you can explore by signing up for one of the best Maui tours). 
                    Maui is divided into five distinct regions: Many travelers base themselves along the coasts of South Maui (home to the famous Wailea Beach) or West Maui, 
                    where the sands of Kaanapali Beach and the music from the Old Lahaina Luau are located. But the rest of the island should not be missed. 
                    Travel along the Road to Hana to experience East Maui&apos;s scenic coastline, explore Haleakala – the world&apos;s largest dormant volcano – in the Upcountry and discover the former tribal battlegrounds of Central Maui&apos;s Iao Valley State Park. 
                    And for a bird&apos;s-eye view of it all, reserve a spot on one of Maui&apos;s best helicopter tours.'
            />
        </div>
    )
}

export default Maui
