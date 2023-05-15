/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import json from '@/data.json';
import { ff_sans_cond, ff_serif } from '../style/fonts';

export default function CrewPage() {
  const [name, setName] = useState('Douglas Hurley');

  const data = json.crew.find((member) => member.name === name);
  console.log(data);
  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className={`numbered-title ${ff_sans_cond}`}>
        <span aria-hidden="true">02 </span>Meet your crew
      </h1>

      <article className="crew-details flow">
        <header className="flow flow--space-small">
          <h2 className={`fs-600 role uppercase ${ff_serif.className}`}>
            {data?.role}
          </h2>
          <p className={`fs-700 name uppercase ${ff_serif.className}`}>
            {name}
          </p>
        </header>
        <p className="text-accent">{data?.bio}</p>
      </article>

      <div className="dot-indicators flex" role="tablist">
        {json.crew.map((member) => (
          <button
            onClick={() => setName(member.name)}
            key={member.name}
            role="tab"
            aria-selected={name === member.name}
          >
            <span className="sr-only">{`The ${member.role}`}</span>
          </button>
        ))}
      </div>
      <picture>
        <source
          srcSet={`${data?.images.webp.substring(1)}`}
          type="image/webp"
        />
        <img src={`${data?.images.png.substring(1)}`} alt={`${data?.name}`} />
      </picture>
    </main>
  );
}
