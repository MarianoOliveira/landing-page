'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Link href="#inicio" className={`${styles.logo} ${className}`}>
      <Image
        src={variant === 'light' ? '/images/logo/logo-white.png' : '/images/logo/logo.png'}
        alt="Mariano Oliveira"
        width={120}
        height={32}
        className={styles.image}
        priority
      />
    </Link>
  );
}
