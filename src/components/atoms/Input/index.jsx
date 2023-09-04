import React from 'react'
import { StyledInput } from './style'
const Input = ({ type, id, name, placeholder, width, height, onChange, value }) =>
    <StyledInput style={{ width: width, height: height }} type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} value={value} />
export default Input
