import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { AppTouchableOpacity } from './AppTouchableOpacity';
import { Surface } from './Surface';
import { BookmarkIcon } from 'lucide-react-native';
import { font } from '@/app/constants/values';
import { useAppTheme } from '@/app/providers/theme';
import { Typography } from './Typography';

export type ContentType = 'audio' | 'video' | 'book';

export interface MediaCardProps {
  imageSource: ImageSourcePropType | string;
  title?: string;
  subtitle?: string;
  duration?: string;
  onPress?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  height?: number;
  width?: number;
  borderRadius?: number;
  containerStyle?: StyleProp<ViewStyle>;
  contentType?: ContentType;
}

export const ContentCard: React.FC<MediaCardProps> = ({
  imageSource,
  title,
  subtitle,
  duration,
  onPress,
  leftIcon,
  rightIcon,
  height = font.h(180),
  width = font.w(180),
  borderRadius = 16,
  containerStyle,
  contentType = 'video',
}) => {
  const { theme } = useAppTheme();
  return (
    <AppTouchableOpacity
      style={[
        styles.container,
        { width, height, borderRadius },
        containerStyle,
      ]}
      onPress={onPress}>
      <ImageBackground
        source={
          typeof imageSource === 'string' ? { uri: imageSource } : imageSource
        }
        style={[styles.image, { borderRadius }]}
        imageStyle={{ borderRadius }}
        resizeMode="cover">
        <View style={styles.overlay}>
          {/* Top row icons */}
          <View style={styles.topIcons}>
            <View>
              {leftIcon && (
                <Surface size={28} style={styles.rightIconContainer} shadow>
                  {leftIcon}
                </Surface>
              )}
            </View>
            <View>
              <Surface size={28} style={styles.rightIconContainer} shadow>
                {rightIcon ?? (
                  <BookmarkIcon
                    size={font.h(15)}
                    color={theme.colors.primaryButtonText}
                  />
                )}
              </Surface>
            </View>
          </View>

          {/* Bottom content */}
          {(title || subtitle || duration) && (
            <View style={styles.textContainer}>
              {title && (
                <Typography
                  weight="bold"
                  size={contentType === 'book' ? 'regular' : 'medium'}
                  style={{ color: theme.colors.primaryButtonText }}>
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography style={{ color: theme.colors.primaryButtonText }}>
                  {subtitle}
                </Typography>
              )}
            </View>
          )}
        </View>
      </ImageBackground>
    </AppTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'space-between',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    padding: 10,
  },

  subtitle: {
    color: '#ddd',
    fontSize: 12,
  },
  rightIconContainer: {
    backgroundColor: '#FFFFFF99',
    borderWidth: 0.61,
    borderColor: '#FFFFFF80',
  },
});
