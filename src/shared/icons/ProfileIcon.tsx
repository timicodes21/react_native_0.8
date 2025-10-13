import { useAppTheme } from '@/app/providers/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';

export const ProfileIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
  ...props
}) => {
  const { theme } = useAppTheme();
  return (
    <Svg
      width={width || 25}
      height={height || 26}
      fill="none"
      {...props}
      viewBox="0 0 25 26">
      <Path
        d="M19.6489 21.994V19.9804C19.6489 18.9123 19.2246 17.8879 18.4693 17.1327C17.7141 16.3774 16.6897 15.9531 15.6216 15.9531H9.58073C8.51263 15.9531 7.48828 16.3774 6.73302 17.1327C5.97777 17.8879 5.55347 18.9123 5.55347 19.9804V21.994"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6012 11.9256C14.8254 11.9256 16.6285 10.1225 16.6285 7.89835C16.6285 5.67416 14.8254 3.87109 12.6012 3.87109C10.377 3.87109 8.57397 5.67416 8.57397 7.89835C8.57397 10.1225 10.377 11.9256 12.6012 11.9256Z"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
