import React, { ReactNode } from 'react';
import { TailwindProvider as RawTailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';

const TypedTailwindProvider = ({ children }: { children: ReactNode }) => (
  <RawTailwindProvider utilities={utilities as any as never}>
    {children}
  </RawTailwindProvider>
);

export default TypedTailwindProvider;
