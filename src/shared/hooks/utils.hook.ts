import { useCallback, useState } from 'react';
import { NativeScrollEvent } from 'react-native';

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export const useToggle = (initial: boolean = false) => {
  const [show, setShow] = useState(initial);

  const toggleShow = useCallback(() => {
    setShow(prev => !prev);
  }, []);

  return { show, toggleShow };
};
