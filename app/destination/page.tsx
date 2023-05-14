/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { ff_sans_cond, ff_sans_normal, ff_serif } from '../style/fonts';
import json from '@/data.json';

export default function DestinationPage() {
  const [destination, setDestination] = useState('Moon');

  const data = json.destinations.find((dest) => dest.name === destination);
  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className={`numbered-title ${ff_sans_cond}`}>
        <span aria-hidden="true">01 </span>Pick your destination
      </h1>

      <img src={`${data?.images.webp.substring(1)}`} alt={`${data?.name}`} />

      <div className="tab-list underline-indicators flex" role="tablist">
        {json.destinations.map((dest) => (
          <button
            key={dest.name}
            role="tab"
            aria-selected={destination === dest.name}
            onClick={() => setDestination(dest.name)}
            className={`uppercase text-accent bg-transparent letter-spacing-2 ${
              ff_sans_cond.className
            } ${destination === dest.name ? 'active' : ''} `}
          >
            {dest.name}
          </button>
        ))}
      </div>

      <article className="destination-info">
        <h2 className={`fs-800 text-white uppercase ${ff_serif.className} `}>
          {destination}
        </h2>

        <p className={`text-accent fs-400 ${ff_sans_normal.className}`}>
          {data?.description}
        </p>

        <div className="destination-meta flex">
          <div>
            <h3
              className={`fs-200 text-accent uppercase ${ff_sans_cond.className} letter-spacing-2`}
            >
              Avg. Distance
            </h3>
            <p className={`uppercase ${ff_serif.className}`}>
              {data?.distance}
            </p>
          </div>

          <div>
            <h3
              className={`fs-200 text-accent uppercase ${ff_sans_cond.className} letter-spacing-2`}
            >
              Est. travel time
            </h3>
            <p className={`uppercase ${ff_serif.className}`}>{data?.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
