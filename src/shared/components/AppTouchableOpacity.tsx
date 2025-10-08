import { HIT_SLOP, TOUCH_OPACITY } from '@/app/constants/values';
import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface IProps extends TouchableOpacityProps {
  children: ReactNode;
}

export const AppTouchableOpacity: React.FC<IProps> = ({
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={TOUCH_OPACITY}
      hitSlop={HIT_SLOP(5)}>
      {children}
    </TouchableOpacity>
  );
};
