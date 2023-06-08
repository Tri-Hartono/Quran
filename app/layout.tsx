import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { Roboto } from 'next/font/google';
import Providers from './providers';
import ScrolltoTop from '@/components/ScrolltoTop';

const Robboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Robboto.className} px-setting relative"`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrolltoTop />
        </Providers>
      </body>
    </html>
  );
}
