import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';
import { useAppTheme } from '@/app/providers/theme';

export const DiscoverIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
  ...props
}) => {
  const { theme } = useAppTheme();
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      fill="none"
      {...props}
      viewBox="0 0 28 28">
      <Path
        d="M12.8533 3.28059C12.9033 3.01296 13.0453 2.77124 13.2548 2.59729C13.4642 2.42334 13.7279 2.32812 14.0002 2.32812C14.2724 2.32812 14.5361 2.42334 14.7456 2.59729C14.955 2.77124 15.097 3.01296 15.147 3.28059L16.3732 9.76492C16.4603 10.2259 16.6843 10.65 17.016 10.9817C17.3478 11.3135 17.7718 11.5375 18.2328 11.6246L24.7172 12.8508C24.9848 12.9007 25.2265 13.0428 25.4005 13.2522C25.5744 13.4616 25.6696 13.7253 25.6696 13.9976C25.6696 14.2698 25.5744 14.5335 25.4005 14.743C25.2265 14.9524 24.9848 15.0944 24.7172 15.1444L18.2328 16.3706C17.7718 16.4577 17.3478 16.6817 17.016 17.0135C16.6843 17.3452 16.4603 17.7692 16.3732 18.2303L15.147 24.7146C15.097 24.9822 14.955 25.2239 14.7456 25.3979C14.5361 25.5718 14.2724 25.667 14.0002 25.667C13.7279 25.667 13.4642 25.5718 13.2548 25.3979C13.0453 25.2239 12.9033 24.9822 12.8533 24.7146L11.6272 18.2303C11.5401 17.7692 11.3161 17.3452 10.9843 17.0135C10.6526 16.6817 10.2285 16.4577 9.76751 16.3706L3.28318 15.1444C3.01555 15.0944 2.77383 14.9524 2.59988 14.743C2.42594 14.5335 2.33072 14.2698 2.33072 13.9976C2.33072 13.7253 2.42594 13.4616 2.59988 13.2522C2.77383 13.0428 3.01555 12.9007 3.28318 12.8508L9.76751 11.6246C10.2285 11.5375 10.6526 11.3135 10.9843 10.9817C11.3161 10.65 11.5401 10.2259 11.6272 9.76492L12.8533 3.28059Z"
        stroke={theme.colors[color ?? 'primaryButtonText']}
        strokeWidth={2.07407}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.3331 2.32812V6.99479"
        stroke={theme.colors[color ?? 'primaryButtonText']}
        strokeWidth={2.07407}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.6667 4.67188H21"
        stroke={theme.colors[color ?? 'primaryButtonText']}
        strokeWidth={2.07407}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66643 25.6667C5.9551 25.6667 6.99977 24.622 6.99977 23.3333C6.99977 22.0447 5.9551 21 4.66643 21C3.37777 21 2.3331 22.0447 2.3331 23.3333C2.3331 24.622 3.37777 25.6667 4.66643 25.6667Z"
        stroke={theme.colors[color ?? 'primaryButtonText']}
        strokeWidth={2.07407}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
