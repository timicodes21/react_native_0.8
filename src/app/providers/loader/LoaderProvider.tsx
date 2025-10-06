// app/providers/loader/LoaderProvider.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { LoaderContext } from './loaderContext';
import { setLoaderRef } from './loaderService';
import { LoaderProviderProps } from './interfaces';
import { AppLoader } from '@/shared/components';

const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const showLoader = (params?: { text?: string }) => {
    Keyboard.dismiss();
    setText(params?.text ?? '');
    setVisible(true);
  };

  const hideLoader = () => {
    setText('');
    setVisible(false);
  };

  // Attach to service once mounted
  useEffect(() => {
    setLoaderRef({ show: showLoader, hide: hideLoader });
  }, []);

  const contextValue = useMemo(() => ({ showLoader, hideLoader }), []);

  return (
    <LoaderContext.Provider value={contextValue}>
      <AppLoader visible={visible} text={text} />
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
