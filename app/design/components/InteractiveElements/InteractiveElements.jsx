import { ff_serif } from '@/app/style/fonts';
import React from 'react';

export default function InteractiveElements() {
  return (
    <section class="flow" id="interactive-elements">
      <h2 class="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      {/* navigation */}
      <div></div>

      <div class="flex">
        <div style={{ marginTop: '5rem' }}>
          {/* explore button */}
          <a
            href="#"
            className={`large-button uppercase ${ff_serif.className} text-dark bg-white fs-600`}
          >
            Explore
          </a>
        </div>

        <div style={{ marginBottom: '50vh' }}>
          {/* <!-- Tabs --> */}

          {/* <!-- Dots --> */}

          {/* <!-- Numbers --> */}
        </div>
      </div>
    </section>
  );
}
