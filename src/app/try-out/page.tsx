'use client';

import { FormEvent } from 'react';
import styles from '../page.module.css';

export default function TryOut() {
  async function recolor(e: FormEvent) {
    e.preventDefault();
  }

  return (<main className={styles.main}></main>);
}
