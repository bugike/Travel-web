import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--light'];
const SIZES = ['btn--medium', 'btn--large'];
const LINKS = ['/', '/sign-up', '/trailer', '/contact', '/adventure'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, linkTo}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkLinkTo = LINKS.includes(linkTo) ? linkTo : LINKS[0];

    return (
        <Link to={checkLinkTo} className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
