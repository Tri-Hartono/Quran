'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';

function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === 'dark');
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div onClick={toggleDarkMode} className="flex items-center focus:outline-none">
      {isDark ? (
        <div className="mr-2 text-2xl text-slate-100">
          <RiSunLine />
        </div>
      ) : (
        <div className="mr-2 text-2xl text-gray-700">
          <span className="text-darkColors">
            <RiMoonClearLine />
          </span>
        </div>
      )}
    </div>
  );
}

export default DarkMode;
