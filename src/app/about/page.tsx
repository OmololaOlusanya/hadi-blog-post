import { About } from '@/component/about/About';
import { AppLayout } from '@/component/layout.tsx/AppLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'About' };

const AboutPage = () => {
  return (
    <AppLayout>
      <About />
    </AppLayout>
  );
};

export default AboutPage;
