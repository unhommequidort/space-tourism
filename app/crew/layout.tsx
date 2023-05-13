import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader';

export default function CrewLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="crew grid page-wrapper">
      <MainHeader />

      {children}
    </div>
  );
}
