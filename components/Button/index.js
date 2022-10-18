import React from 'react';

const Button = ({ option, handleClick }) => {
  return (
    <div className='button'>
        <button onClick={handleClick}>{option}</button>
    </div>
  )
}

export default Button