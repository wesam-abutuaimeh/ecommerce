import React from 'react';
import { StyledButton } from './style';
const Button = ({ children, bgColor, color, width, height, padding, onClick, type }) =>
    <StyledButton style={{ backgroundColor: bgColor, color: color, width: width, height: height, padding: padding }}
        type={type} onClick={onClick}
    >{children}</StyledButton>;
export default Button;
