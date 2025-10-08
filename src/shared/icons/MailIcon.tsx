import { useAppTheme } from '@/app/providers/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';

export const MailIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
  ...props
}) => {
  const { theme } = useAppTheme();
  return (
    <Svg
      width={width || 20}
      height={height || 20}
      fill="none"
      {...props}
      viewBox="0 0 20 20">
      <Path
        d="M15.6875 4.5C16.3984 4.5 17 5.10156 17 5.8125C17 6.25 16.7812 6.63281 16.4531 6.87891L10.5195 11.3359C10.1914 11.582 9.78125 11.582 9.45312 11.3359L3.51953 6.87891C3.19141 6.63281 3 6.25 3 5.8125C3 5.10156 3.57422 4.5 4.3125 4.5H15.6875ZM8.93359 12.0469C9.5625 12.5117 10.4102 12.5117 11.0391 12.0469L17 7.5625V13.25C17 14.2344 16.207 15 15.25 15H4.75C3.76562 15 3 14.2344 3 13.25V7.5625L8.93359 12.0469Z"
        fill={theme.colors[color ?? 'main']}
      />
    </Svg>
  );
};
