import Image from 'next/image';
import React from 'react';
import PrimaryNavigation from '@/app/components/PrimaryNavigation/PrimaryNavigation';

export default function MainHeader() {
  return (
    <header className="primary-header flex">
      <Image
        src="/assets/shared/logo.svg"
        alt="space tourism logo"
        width={100}
        height={100}
        className="logo"
      />

      <PrimaryNavigation />
    </header>
  );
}
