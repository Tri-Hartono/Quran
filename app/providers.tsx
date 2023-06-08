'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';

type ChildrenProps = {
  children: ReactNode;
};
export default function Providers({ children }: ChildrenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
