'use client';
import React, { useState } from 'react';
import json from '@/data.json';
import { ff_sans_cond, ff_serif } from '../style/fonts';

export default function TechnologyPage() {
  const [tech, setTech] = useState('Launch vehicle');

  const data = json.technology.find((obj) => obj.name === tech);

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className={`numbered-title ${ff_sans_cond}`}>
        <span aria-hidden="true">03 </span>Space launch 101
      </h1>

      <picture>
        <source
          media="(min-width: 45em)"
          srcSet={`${data?.images.portrait.substring(1)}`}
          type="image/jpg"
        />
        <img
          src={`${data?.images.landscape.substring(1)}`}
          alt={`${data?.name}`}
        />
      </picture>

      <div
        className={`numbered-indicators fs-600 flex ${ff_serif.className}`}
        role="tablist"
      >
        {json.technology.map((obj, index) => (
          <button
            onClick={() => setTech(obj.name)}
            key={obj.name}
            className="bg-dark text-white"
            role="tab"
            aria-selected={tech === obj.name}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <article className="technology-details flow ">
        <header className="flow flow--space-small">
          <p
            className={`uppercase text-accent bg-dark letter-spacing-2 ${ff_sans_cond.className} `}
          >
            The terminology...
          </p>
          <h2 className={`fs-700 name uppercase ${ff_serif.className}`}>
            {data?.name}
          </h2>
        </header>
        <p>{data?.description}</p>
      </article>

      {/*

  03 Space launch 101

  1
  2
  3

  The terminology...
  Launch vehicle

  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad! */}
    </main>
  );
}
