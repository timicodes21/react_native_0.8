import { ToastParams } from './interfaces';

// ToastService.ts
let toastRef: ((params: ToastParams) => void) | null = null;

export const setToastRef = (fn: (params: ToastParams) => void) => {
  toastRef = fn;
};

export const showToast = (params: ToastParams) => {
  if (toastRef) {
    toastRef(params);
  } else {
    console.warn('ToastProvider is not mounted yet');
  }
};
