'use client';
import React from 'react'
import CustomImage from '../CustomImage';
import { AvatarContainer } from './style';
const Avatar = () => {
  return (
    <AvatarContainer>
      <CustomImage src="/avatar.png" alt="banner-board" width="44" height="44" />
      <div>
        <p>Hi, user </p>
        <p>lets get stated</p>
      </div>
    </AvatarContainer>
  )
}
export default Avatar;
