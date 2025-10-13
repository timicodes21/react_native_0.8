import { useAppTheme } from '@/app/providers/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';

export const HomeIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
  ...props
}) => {
  const { theme } = useAppTheme();
  return (
    <Svg
      width={width || 26}
      height={height || 26}
      fill="none"
      {...props}
      viewBox="0 0 26 26">
      <Path
        d="M16.0679 21.9949V13.9404C16.0679 13.6734 15.9618 13.4173 15.773 13.2285C15.5842 13.0397 15.3281 12.9336 15.0611 12.9336H11.0338C10.7668 12.9336 10.5107 13.0397 10.3219 13.2285C10.1331 13.4173 10.027 13.6734 10.027 13.9404V21.9949"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.98608 10.9202C3.98601 10.6273 4.04985 10.3379 4.17314 10.0722C4.29643 9.80651 4.4762 9.5709 4.69992 9.38182L11.7476 3.34093C12.1111 3.03376 12.5716 2.86523 13.0474 2.86523C13.5233 2.86523 13.9838 3.03376 14.3472 3.34093L21.3949 9.38182C21.6186 9.5709 21.7984 9.80651 21.9217 10.0722C22.045 10.3379 22.1088 10.6273 22.1088 10.9202V19.9816C22.1088 20.5156 21.8966 21.0278 21.519 21.4054C21.1413 21.7831 20.6292 21.9952 20.0951 21.9952H5.99971C5.46567 21.9952 4.95349 21.7831 4.57586 21.4054C4.19823 21.0278 3.98608 20.5156 3.98608 19.9816V10.9202Z"
        stroke={theme.colors[color ?? 'main']}
        strokeWidth={2.01363}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
