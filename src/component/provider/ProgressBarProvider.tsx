'use client';

import { Colors } from '@/utils/theme';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

export const ProgressBarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color={Colors.primary}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
