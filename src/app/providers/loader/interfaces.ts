// app/providers/loader/interfaces.ts
import { ReactNode } from 'react';

export interface LoaderContextValue {
  showLoader: ({ text }: { text?: string }) => void;
  hideLoader: () => void;
}

export interface LoaderProviderProps {
  children: ReactNode;
}
