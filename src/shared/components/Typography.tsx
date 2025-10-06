import React, { ReactNode, useMemo } from 'react';
import { StyleProp, Text, TextProps, TextStyle, View } from 'react-native';
import {
  colorMap,
  fontMap,
  fontSizeMap,
  variantMap,
  IFontColor,
  IFontSize,
  IFontWeight,
  IFontFamily,
  IVariant,
} from '@/app/configs/typography.config';
import { font } from '@/app/constants/values';
import { useAppTheme } from '@/app/providers/theme';

// ---- Props ----
export interface ITypographyProps extends TextProps {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
  size?: IFontSize | number;
  color?: IFontColor;
  weight?: IFontWeight;
  lh?: number;
  center?: boolean;
  fontFamily?: IFontFamily;
  variant?: IVariant;
}

// ---- Typography Component ----
const Typography: React.FC<ITypographyProps> = ({
  children,
  style,
  center = false,
  weight = 'regular',
  color = 'main',
  size = 'regular',
  lh,
  fontFamily = 'opensans',
  variant,
  ...rest
}) => {
  const { theme } = useAppTheme();

  // Variant overrides
  const finalSize = variant ? variantMap[variant].size : size;
  const finalWeight = variant ? variantMap[variant].weight : weight;

  const computedStyle: TextStyle = useMemo(
    () => ({
      color: theme.colors[colorMap[color]],
      fontFamily: fontMap[fontFamily][finalWeight],
      textAlign: center ? 'center' : 'left',
      fontSize:
        typeof finalSize === 'number' ? finalSize : fontSizeMap[finalSize],
      lineHeight: lh,
    }),
    [theme, color, fontFamily, finalWeight, center, finalSize, lh],
  );

  return (
    <Text {...rest} style={[computedStyle, style]}>
      {children}
    </Text>
  );
};

// ---- ErrorText Shortcut ----
export const ErrorText: React.FC<ITypographyProps> = ({
  children,
  ...rest
}) => (
  <Typography {...rest} color="error" size="small">
    {children}
  </Typography>
);

// ---- ListHeader Shortcut ----
export const ListHeader = ({
  title = 'Title',
  style,
  rightComponent,
}: {
  title?: string;
  rightComponent?: ReactNode;
  style?: StyleProp<TextStyle>;
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: font.h(10),
    }}>
    <Typography variant="h3" style={style}>
      {title}
    </Typography>
    {rightComponent}
  </View>
);

export default Typography;
