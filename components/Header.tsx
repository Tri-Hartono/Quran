import React from 'react';
import Link from 'next/link';
import DarkMode from '@/app/darkMode';
import Image from 'next/image';
import Logo from './../public/Logo.png';
export default function Header() {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <Link href="/surah/">
        <Image src={Logo} width={30} height={30} alt="Logo " />
      </Link>

      <DarkMode />
    </div>
  );
}
