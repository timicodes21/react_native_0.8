import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from './types';

export const ProfileAvatarIcon: React.FC<IIconProps> = ({
  height,
  width,
  color,
  ...props
}) => {
  return (
    <Svg
      width={width || 19}
      height={height || 232}
      fill="none"
      {...props}
      viewBox="0 0 19 32">
      <Path
        d="M9.83606 16.3166C7.09449 16.3166 4.89351 14.1157 4.89351 11.3741C4.89351 8.67115 7.09449 6.43156 9.83606 6.43156C12.539 6.43156 14.7786 8.67115 14.7786 11.3741C14.7786 14.1157 12.539 16.3166 9.83606 16.3166ZM11.7667 18.1701C15.4737 18.1701 18.4855 21.182 18.4855 24.8889C18.4855 25.6225 17.8677 26.2017 17.134 26.2017H2.49947C1.76581 26.2017 1.1866 25.6225 1.1866 24.8889C1.1866 21.182 4.15985 18.1701 7.86676 18.1701H11.7667Z"
        fill="#E7E5E4"
      />
    </Svg>
  );
};
