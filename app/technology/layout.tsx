import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';

export default function TechnologyLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MainHeader />

      {children}
    </section>
  );
}
