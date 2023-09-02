import React from 'react';
import { StyledButton } from './style';
const Button = ({ children, bgColor, color, width, height, padding, }) =>
    <StyledButton style={{ backgroundColor: bgColor, color: color, width: width, height: height, padding: padding }}>{children}</StyledButton>;
export default Button;
