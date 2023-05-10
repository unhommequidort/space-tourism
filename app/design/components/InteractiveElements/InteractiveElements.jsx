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
        <div style={{ marginTop: '5rem', marginRight: '12rem' }}>
          {/* explore button */}
          <a
            href="#"
            className={`large-button uppercase ${ff_serif.className} text-dark bg-white fs-600`}
          >
            Explore
          </a>
        </div>

        <div
          className="flow"
          style={{ marginBottom: '10vh', '--flow-space': '4rem' }}
        >
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
          <div className="dot-indicators flex" role="tablist">
            <button role="tab" aria-selected="true">
              <span className="sr-only">Slide title</span>
            </button>
            <button role="tab" aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
            <button role="tab" aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
          </div>

          {/* <!-- Numbers --> */}
          <div
            className={`numbered-indicators fs-600 flex ${ff_serif.className}`}
            role="tablist"
          >
            <button
              className="bg-dark text-white"
              role="tab"
              aria-selected="true"
            >
              1
            </button>
            <button
              className="bg-dark text-white"
              role="tab"
              aria-selected="false"
            >
              2
            </button>
            <button
              className="bg-dark text-white"
              role="tab"
              aria-selected="false"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
