import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';

export const ff_serif = Bellefair({
  subsets: ['latin'],
  weight: '400',
  fallback: ['serif'],
});

export const ff_sans_normal = Barlow({
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const ff_sans_cond = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
});
