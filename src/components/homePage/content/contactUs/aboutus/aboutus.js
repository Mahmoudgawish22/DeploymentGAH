import '../aboutus/aboutus.css';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import paint from '../../../../../imgs/paint-palette.svg'
import time from '../../../../../imgs/chronometer.svg'
import brush from '../../../../../imgs/brush.svg'
import services from '../../../../../imgs/authorized-dealer.svg'
function AboutUs(props) {
    return (
        <div id='aboutus'>
            <ScrollAnimation animateIn="slideInLeft" animateOnce='true'>
            <div id='discrb' >
                <div id='discrbcontent'>
                    <p id='discrbtitle'>
                        Our Services
                    </p>
                </div>
                <div id='props'>
                    <div className='prop'>
                        <img className='discbicon' src={paint} alt='novels'/>
                        <div className='describtion' style={{display:'flex', flexDirection: 'column'}}>
                            <h3>
                            Your Own Paint
                            </h3>
                            <p className='icondiscrb' style={{color: 'black', direction:'ltr'}}>
                        Through experience working with a lot of agencies, you find that they impose something on you for work ... but here, no.
You can choose whatever works of art you want, and simply we can create them again as you want
                            </p>
                        </div>
                        
                    </div>
                    <div className='propex'>
                        <img className='discbicon' src={time} alt='novels'/>
                        <div className='describtion' style={{display:'flex', flexDirection: 'column'}}>
                            <h3>
                            Time Matters
                            </h3>
                            <p className='icondiscrb' style={{color: 'black', direction:'ltr'}}>
                            Time is the primary factor in accomplishing everything in life, so if we are comfortable and do not complete the work in a timely manner, we will never succeed in anything.
At Omar Temo Agency, we always strive to complete business in the shortest possible time, and with full creativity.
                            </p>
                        </div>
                    </div>
                    <div className='prop'>
                        <img className='discbicon' src={brush} alt='novels'/>
                        <div className='describtion' style={{display:'flex', flexDirection: 'column'}}>
                            <h3>
                            Many types
                            </h3>
                            <p className='icondiscrb' style={{color: 'black', direction:'ltr'}}>
                            We have a lot of creative fields like we said before, from painting with tea, oil paints, salt, or even graffiti, paper and pencil.
We can draw a 3D drawing here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}
export default AboutUs