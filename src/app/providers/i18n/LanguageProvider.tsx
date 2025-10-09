import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { initI18n } from './i18n';

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await initI18n();
      setReady(true);
    })();
  }, []);

  if (!ready) return null; // or a loading spinner

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
