import React from 'react';
import { ff_serif } from '../../style/fonts';
import styles from './LargeButton.module.css';
import Link from 'next/link';

interface Props {
  url: string;
  text: string;
}

export default function LargeButton({ url, text }: Props): JSX.Element {
  return (
    <Link
      href={url}
      className={`${styles['large-button']} uppercase ${ff_serif.className} text-dark bg-white`}
    >
      {text}
    </Link>
  );
}
