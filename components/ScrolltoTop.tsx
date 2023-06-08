'use client';
import React from 'react';
import { HiArrowSmUp } from 'react-icons/hi';

//The approach recommended by Next.js
const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrolltoTop() {
  return (
    <div>
      <div className="fixed bg-blue-400 rounded-full p-2 bottom-20 text-white right-4 z-20" onClick={scrollToTop}>
        <HiArrowSmUp className="w-5 h-5" />
      </div>
    </div>
  );
}
