import { ff_sans_cond, ff_serif } from '@/app/style/fonts';
import React from 'react';

export default function InteractiveElements() {
  return (
    <section class="flow" id="interactive-elements">
      <h2 class="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      {/* navigation */}
      <div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li className="active">
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>00</span>Active
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>01</span>Hovered
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>02</span>Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>

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
          <div className="tab-list underline-indicators flex" role="tablist">
            <button
              role="tab"
              aria-selected="true"
              className={`uppercase text-accent bg-dark letter-spacing-2 ${ff_sans_cond.className} active`}
            >
              Moon
            </button>
            <button
              role="tab"
              aria-selected="false"
              className={`uppercase text-accent bg-dark letter-spacing-2 ${ff_sans_cond.className}`}
            >
              Mars
            </button>
            <button
              role="tab"
              aria-selected="false"
              className={`uppercase text-accent bg-dark letter-spacing-2 ${ff_sans_cond.className}`}
            >
              Europa
            </button>
          </div>

          {/* <!-- Dots --> */}

          {/* <!-- Numbers --> */}
        </div>
      </div>
    </section>
  );
}
