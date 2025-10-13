import { useAppTheme } from '@/app/providers/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';

export const DownloadIcon: React.FC<IIconProps> = ({
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
        d="M12.0833 15.9529V3.87109"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.1445 15.9531V19.9804C21.1445 20.5144 20.9324 21.0266 20.5547 21.4042C20.1771 21.7819 19.6649 21.994 19.1309 21.994H5.03548C4.50143 21.994 3.98926 21.7819 3.61163 21.4042C3.234 21.0266 3.02185 20.5144 3.02185 19.9804V15.9531"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.04919 10.9199L12.0833 15.954L17.1173 10.9199"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
