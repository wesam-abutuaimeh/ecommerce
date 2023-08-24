'use client';
import React from 'react';
import { Preloader, Waterfall } from '@/styles/loader';

export default function Loading() {
  return (
    <Preloader>
      <Waterfall>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Waterfall>
    </Preloader>
  );
}
