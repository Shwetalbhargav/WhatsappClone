// types/tailwind-rn.d.ts

import { ReactNode } from 'react';
import { Style } from 'tailwind-rn';

declare module 'tailwind-rn' {
  export interface TailwindProviderProps {
    children: ReactNode;
    utilities: Record<string, { style: Style; media?: string }>;
  }

  // Patch the provider with correct children support
  export const TailwindProvider: React.FC<TailwindProviderProps>;
}
