// app/providers/loader/loaderContext.ts
import { createContext, useContext } from 'react';
import { LoaderContextValue } from './interfaces';

export const LoaderContext = createContext<LoaderContextValue>({
  showLoader: () => {},
  hideLoader: () => {},
});

export const useLoader = () => useContext(LoaderContext);
