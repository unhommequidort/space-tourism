'use client';
import { ff_sans_cond } from '@/app/style/fonts';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './PrimaryNavigation.module.css';

export default function PrimaryNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        className={`${styles['mobile-nav-toggle']}`}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={menuOpen}
          className={`${styles['primary-navigation']} ${styles['underline-indicators']} flex`}
        >
          <li className={`${styles['active']}`}>
            <Link
              className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
              href="/"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li>
            <Link
              className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
              href="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
              href="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
              href="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
