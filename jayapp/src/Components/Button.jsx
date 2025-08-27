import React from 'react';

// Button Component
export const Button = ({buttonTitle, color}) =>{
    return (
        <button className='hero-button' style={{ backgroundColor: color, color: '#cacacaff' }}>{buttonTitle}
        </button>
    )
}
export default Button;