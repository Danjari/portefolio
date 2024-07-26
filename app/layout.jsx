import { Outfit } from 'next/font/google';
import './globals.css';

// compoenents
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://moudjahid-moussa.com'),
  title: {
    template: '%s | Moudjahid Moussa',
    default: 'Moudjahid Moussa| Personal website',
  },
  description: 'My little corner of the internet, where I share my web development and AI projects, skills, and professional experience in software engineering.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: 'Moudjahid Moussa, portfolio, web development, software engineering, projects, intern, best software developer',
  openGraph: {
    title: 'Moudjahid Moussa | Personal Website',
    description: 'My little corner of the internet, where I share my web development and AI projects, skills, and professional experience in software engineering.',
    type: 'website',
    url: 'https://moudjahid-moussa.com',
    siteName: 'Moudjahid Moussa',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}