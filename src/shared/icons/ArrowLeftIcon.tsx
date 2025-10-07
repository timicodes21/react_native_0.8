import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { IIconProps } from './types';
import { useAppTheme } from '@/app/providers/theme';

export const ArrowLeftIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
  ...props
}) => {
  const { theme } = useAppTheme();
  return (
    <Svg width={width || 24} height={height || 24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={theme.colors[color || 'main']}
          fillRule="evenodd"
          d="M21 12a.75.75 0 0 1-.75.75H5.56l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47h14.69A.75.75 0 0 1 21 12Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
