'use client';
import React from 'react'
import CustomImage from '../CustomImage';
import { AvatarContainer } from './style';

const Avatar = ({ src, alt, width, height, p1, p2 }) => {
  return (
    <AvatarContainer>
      <CustomImage src={src} alt={alt} width={width} height={height} />
      <div>
        <p>{p1} </p>
        <p>{p2}</p>
      </div>
    </AvatarContainer>
  )
}

export default Avatar;
