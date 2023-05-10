import React from 'react';

export default function PrimaryNavigation() {
  return (
    <nav>
      <ul className={`primary-navigationunderline-indicators flex`}>
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
  );
}
