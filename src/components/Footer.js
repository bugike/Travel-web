import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                
                <form className='input-areas'>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>Social Media</h2>
                        <Link 
                        to={{pathname: 'https://www.facebook.com/'}}
                        target='_blank'
                        >
                            Facebook
                        </Link>
                        <Link 
                        to={{pathname: 'https://www.instagram.com/'}}
                        target='_blank'
                        >
                            Instagram
                        </Link>
                        <Link
                        to={{pathname: 'https://www.youtube.com/'}}
                        target='_blank'
                        >
                            Youtube
                        </Link>
                        <Link 
                        to={{pathname: 'https://www.twitter.com/'}}
                        target='_blank'
                        >
                            Twitter
                        </Link>
                        <Link
                            to={{pathname: 'https://www.linkedin.com/'}}
                            target='_blank'
                        >
                            LinkedIn
                        </Link>

                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL  <i className='fas fa-mountain' />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © Copyright 2020-2021</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to={{pathname: 'https://www.facebook.com/'}}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to={{pathname: 'https://www.instagram.com/'}}
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to={{pathname: 'https://www.youtube.com/'}}
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to={{pathname: 'https://www.twitter.com/'}}
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to={{pathname: 'https://www.linkedin.com/'}}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
