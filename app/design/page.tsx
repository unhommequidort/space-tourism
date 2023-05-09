import React from 'react';
import styles from './page.module.css';
import { ff_sans_cond, ff_serif } from '../style/fonts';
import Colors from './components/Colors/Colors';

export const metadata = {
  title: ' Design System | Space Tourism',
  description: 'Design system for the Space Tourism website',
};

export default function DesignPage() {
  return (
    <div className="container">
      <h1 className={`${ff_sans_cond.className} ${styles.h1}`}>
        Design System
      </h1>
      <Colors />
    </div>
  );
}
