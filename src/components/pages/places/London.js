import React from 'react'
import ImageSlider from '../../ImageSlider';
import IntroCard from '../../IntroCard';
import '../../../App.css';

function London() {
    return (
        <div className='main-container place'>
            <ImageSlider place='London' />
            <IntroCard 
                title='Why Go To London' 
                firstP='The English writer Samuel Johnson famously said, "You find no man, at all intellectual, who is willing to leave London. 
                    No, Sir, when a man is tired of London, he is tired of life; for there is in London all that life can afford." 
                    More than two centuries have passed since Johnson&apos;s era, but his words still ring true. 
                    Life in London is nothing short of invigorating, and travelers find that one visit isn&apos;t enough to experience everything this two-millennia-old city has to offer.'
                secondP='Here, the antiquated clasps hands with the contemporary. 
                    You&apos;ll find the historic Tower of London and the avant-garde Tate Modern both considered must-sees. 
                    Shakespeare&apos;s sonnets are still being uttered by actors who don modern garb. 
                    Londoners most certainly still respect the royals, but they also jam to the likes of Arctic Monkeys and Adele. 
                    And while they still praise the power of tea, they now make room for some Starbucks here and there, and pressed juice too. 
                    A current leader in everything from politics and banking to fashion and music, London&apos;s culture compass is always attuned to what&apos;s next. 
                    Discover it all on one of London&apos;s best tours.'
            />
        </div>
    )
}

export default London
