import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';

export const metadata = {
  title: 'Destination | Space Tourism',
  description: 'Space Tourism destination page',
};

export default function DestinationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="destination grid page-wrapper">
      <MainHeader />
      {children}
    </div>
  );
}
