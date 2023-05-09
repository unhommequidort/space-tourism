import React from 'react';
import styles from './Colors.module.css';

export default function Colors() {
  return (
    <section id="colors">
      <h2 className="uppercase">
        <span>01</span> colors
      </h2>

      <div className="flex">
        <div className={styles.colorItem} style={{ flexGrow: 1 }}>
          <div className={`bg-dark text-white ${styles.colorSampleBox}`}>
            #0B0D17
          </div>
          <p>
            <span className="text-accent">RGB</span> 11, 13, 23
          </p>
          <p>
            <span className="text-accent">HSL</span> 230°, 35%, 7%
          </p>
        </div>

        <div className={styles.colorItem}>
          <div className={`bg-accent text-dark ${styles.colorSampleBox}`}>
            #D0D6F9
          </div>
          <p>
            <span className="text-accent">RGB</span> 208, 214, 249
          </p>
          <p>
            <span className="text-accent">HSL</span> 231°, 77%, 90%
          </p>
        </div>

        <div className={styles.colorItem}>
          <div className={`bg-white text-dark ${styles.colorSampleBox}`}>
            #FFFFFF
          </div>
          <p>
            <span className="text-accent">RGB</span> 255, 255, 255
          </p>
          <p>
            <span className="text-accent">HSL</span> 0°, 0%, 100%
          </p>
        </div>
      </div>
    </section>
  );
}
