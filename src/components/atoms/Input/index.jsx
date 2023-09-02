import React from 'react'
import { StyledInput } from './style'
const Input = ({ type, id, name, placeholder, width, height }) => <StyledInput style={{ width: width, height: height }} type={type} id={id} name={name} placeholder={placeholder} />
export default Input
