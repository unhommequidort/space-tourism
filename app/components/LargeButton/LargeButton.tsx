import React from 'react';
import { ff_serif } from '../../style/fonts';
import styles from './LargeButton.module.css';

interface Props {
  url: string;
  text: string;
}

export default function LargeButton({ url, text }: Props): JSX.Element {
  return (
    <a
      href={url}
      className={`${styles['large-button']} uppercase ${ff_serif.className} text-dark bg-white fs-600`}
    >
      {text}
    </a>
  );
}
