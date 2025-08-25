export interface ToastParams {
  id?: number;
  message: string;
}

export type ToastContextType = {
  showToast: (params: ToastParams) => void;
};
