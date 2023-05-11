import { ff_sans_cond } from '@/app/style/fonts';
import Link from 'next/link';
import React from 'react';

export default function PrimaryNavigation() {
  return (
    <nav>
      <ul className={`primary-navigation underline-indicators flex`}>
        <li className="active">
          <Link
            className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
            href="/"
          >
            <span>00</span>Home
          </Link>
        </li>
        <li>
          <Link
            className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
            href="/destination"
          >
            <span>01</span>Destination
          </Link>
        </li>
        <li>
          <Link
            className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
            href="/crew"
          >
            <span>02</span>Crew
          </Link>
        </li>
        <li>
          <Link
            className={`${ff_sans_cond.className} uppercase text-white letter-spacing-2`}
            href="/technology"
          >
            <span>03</span>Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}
