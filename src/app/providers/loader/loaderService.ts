// app/providers/loader/loaderService.ts
interface LoaderParams {
  text?: string;
}

let loaderRef: {
  show?: (params?: LoaderParams) => void;
  hide?: () => void;
} | null = null;

export const setLoaderRef = (ref: typeof loaderRef) => {
  loaderRef = ref;
};

export const showLoader = (params?: LoaderParams) => {
  if (loaderRef?.show) {
    loaderRef.show(params);
  } else {
    console.warn('⚠️ LoaderProvider is not mounted yet');
  }
};

export const hideLoader = () => {
  if (loaderRef?.hide) {
    loaderRef.hide();
  } else {
    console.warn('⚠️ LoaderProvider is not mounted yet');
  }
};
