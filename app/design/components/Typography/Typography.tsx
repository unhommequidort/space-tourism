import { ff_sans_cond, ff_sans_normal, ff_serif } from '@/app/style/fonts';
import React from 'react';
// import { ff_sans_normal } from '@/';

export default function Typography() {
  return (
    <section
      id="typography"
      className="flow"
      style={{ margin: '4rem 0', ['--flow-space' as string]: '3rem' }}
    >
      <h2 className={`numbered-title ${ff_sans_cond}`}>
        <span>02 </span>Typography
      </h2>
      <div className="flex">
        <div
          className="flow"
          style={{ flexBasis: '100%', ['--flow-space' as string]: '2rem' }}
        >
          <div>
            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
            <p className={`fs-900 uppercase ${ff_serif.className}`}>Earth</p>
          </div>
          <div>
            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
            <p className={`fs-800 uppercase ${ff_serif.className}`}>Venus</p>
          </div>
          <div>
            <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
            <p className={`fs-700 uppercase ${ff_serif.className}`}>
              Jupiter & Saturn
            </p>
          </div>
          <div>
            <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
            <p className={`fs-600 uppercase ${ff_serif.className}`}>
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p className="text-accent">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p
              className={`fs-500 text-accent uppercase ${ff_sans_cond.className} letter-spacing-1`}
            >
              So, you want to travel to space
            </p>
          </div>
        </div>

        <div
          className="flow"
          style={{ flexBasis: '100%', ['--flow-space' as string]: '2rem' }}
        >
          <div>
            <p className="text-accent">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p className={`fs-500 uppercase ${ff_serif.className}`}>
              384,400 km
            </p>
          </div>
          <div>
            <p className="text-accent">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p
              className={`fs-200 uppercase ${ff_sans_cond.className} letter-spacing-2`}
            >
              Avg. Distance
            </p>
          </div>
          <div>
            <p className="text-accent">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p
              className={`fs-300 uppercase letter-spacing-3 ${ff_sans_cond.className}`}
            >
              Europa
            </p>
          </div>
          <div>
            <p className="text-accent">Body Text</p>
            <p className={`fs-400 ${ff_sans_normal.className}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
