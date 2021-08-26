import React from 'react';
import { StyledCredit } from './styles/StyledCredit';

const CreditStatement = () => {

  return (
   <StyledCredit>
    Thank you to <a style={{color: 'salmon'}} href="https://www.youtube.com/watch?v=ZGOaCxX8HIU" target="_blank" rel="noreferrer">freeCodeCamp</a> and <a style={{color: 'salmon'}} href="https://www.weibenfalk.com" target="_blank" rel="noreferrer">Thomas Weibenfalk</a> for the awesome Tetris tutorial. This was a great learning experience! 
    </StyledCredit>
   )
}

export default CreditStatement