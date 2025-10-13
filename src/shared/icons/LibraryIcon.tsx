import { useAppTheme } from '@/app/providers/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';

export const LibraryIcon: React.FC<IIconProps> = ({
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
        d="M16.5925 6.89258L20.6198 20.988"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5653 6.89258V20.988"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.53809 8.90625V20.988"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.51074 4.87891V20.9879"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
