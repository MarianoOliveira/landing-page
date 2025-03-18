'use client';

import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '@/config/seo';

export default function SEO() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#1A2B5F" />
    </>
  );
}
