import React, { memo } from 'react';
import FastImage, { FastImageProps, Source } from 'react-native-fast-image';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '@/app/providers/theme/themeContext';
import LightFallbackImage from '@/app/assets/images/light-fallback-image.png';
import DarkFallbackImage from '@/app/assets/images/dark-fallback-image.png';

export interface AppImageProps extends Omit<FastImageProps, 'source'> {
  uri?: string;
  source?: Source;
  showLoader?: boolean;
  loaderColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  fallbackUri?: string;
}

/**
 * AppImage — A performant and themed image component built on FastImage.
 *
 * ✅ Uses FastImage for caching and performance
 * ✅ Supports loader and fallback images
 * ✅ Memoized to prevent unnecessary re-renders
 */
export const AppImage: React.FC<AppImageProps> = memo(
  ({
    uri,
    source,
    showLoader = false,
    loaderColor,
    containerStyle,
    fallbackUri,
    style,
    ...rest
  }) => {
    const { theme, currentTheme } = useAppTheme();

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const fallbackImage =
      currentTheme === 'light' ? LightFallbackImage : DarkFallbackImage;

    const imageSource: Source = React.useMemo(() => {
      if (error && fallbackUri) return { uri: fallbackUri };
      if (source) return source;
      if (uri) return { uri };
      return fallbackImage;
    }, [error, fallbackUri, source, uri, currentTheme]);

    return (
      <View style={[styles.container, containerStyle]}>
        <FastImage
          {...rest}
          style={[StyleSheet.absoluteFill, style]}
          source={imageSource}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
        {showLoader && loading && (
          <ActivityIndicator
            color={loaderColor || theme.colors.primary}
            style={styles.loader}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
  },
});

AppImage.displayName = 'AppImage';
