// ToastProvider.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToastParams } from './interfaces';
import { ToastContext } from './toastContext';
import { setToastRef } from './ToastService';
import Toast from './Toast';
import { SCREEN_HORIZONTAL_SPACING } from '@/app/constants/values';

let toastId = 0;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastParams[]>([]);

  const showToast = useCallback((params: ToastParams) => {
    toastId++;
    const id = toastId;

    const addToast = (prev: ToastParams[]) => [...prev, { ...params, id }];

    setToasts(addToast);
  }, []);

  useEffect(() => {
    setToastRef(showToast);
  }, [showToast]);

  const removeToast = (toast: ToastParams) => {
    setToasts(prev => prev.filter(t => t.id !== toast.id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <View style={styles.container} pointerEvents="none">
        {toasts.map(toast => (
          <Toast
            {...toast}
            key={toast?.id}
            onHide={() => {
              removeToast(toast);
            }}
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: SCREEN_HORIZONTAL_SPACING,
  },
});
