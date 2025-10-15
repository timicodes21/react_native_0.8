import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  ViewToken,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { stylesWithTheme } from '@/app/providers/theme';
import {
  font,
  FULL_WIDTH,
  SCREEN_HORIZONTAL_SPACING,
} from '@/app/constants/values';
import { Surface, Typography } from '@/shared/components';
import { BookIcon } from 'lucide-react-native';

interface IData {
  title: string;
  content: string;
  date: string;
}

const data: IData[] = [
  {
    title: 'Just Launched: New Books Are Here!',
    content:
      'Discover the latest additions to your digital library — start reading now!',
    date: 'Sep 28, 2025',
  },
  {
    title: 'Just Launched: New Books Are Here!',
    content:
      'Discover the latest additions to your digital library — start reading now!',
    date: 'Sep 28, 2025',
  },
];

export const HomeUpdatesSlider = () => {
  const styles = useStyles();
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Animated.event
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setIndex(viewableItems[0]?.index ?? 0);
    },
  ).current;

  const viewabliltyConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={[styles.container]}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabliltyConfig}
        ref={scrollRef}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={[styles.slideItemCon]}>
            <View style={[styles.slideItem]}>
              <Surface
                radius={8}
                color="inputBg"
                size={40}
                style={[styles.bookIconContainer]}>
                <BookIcon color="#FFF" />
              </Surface>
              <View style={[styles.contentContainer]}>
                <Typography
                  size="medium"
                  weight="bold"
                  color="primaryButtonText"
                  style={[styles.text]}>
                  {item?.title}
                </Typography>
                <Typography
                  size="regular"
                  color="primaryButtonText"
                  style={[styles.text]}>
                  {item?.content ?? ''}
                </Typography>
                <Surface
                  style={[styles.planContainer]}
                  height={22}
                  width={113}
                  radius={999}>
                  <Surface size={8} color="primaryButtonText">
                    <View />
                  </Surface>
                  <Typography
                    size="small"
                    weight="bold"
                    color="primaryButtonText">
                    {item?.date ?? ''}
                  </Typography>
                </Surface>
              </View>
            </View>
          </View>
        )}
      />
      <View style={[styles.indicatorWrapper]}>
        <View />
        <SlideIndicator data={[1, 2]} scrollX={scrollX} />
        <Surface
          style={[styles.planContainer]}
          height={22}
          width={72}
          shadow
          color="background">
          <Surface size={8} color="primary">
            <View />
          </Surface>
          <Typography size="small" weight="bold" color="main">
            {index + 1} of {data?.length}
          </Typography>
        </Surface>
      </View>
    </View>
  );
};

interface IProps {
  data: number[];
  scrollX: Animated.Value;
}

const SlideIndicator: React.FC<IProps> = ({ data, scrollX }) => {
  const styles = useStyles();

  return (
    <View style={styles.slideContainer}>
      {data?.map((_, idx) => {
        const inputRange = [
          (idx - 1) * FULL_WIDTH,
          idx * FULL_WIDTH,
          (idx + 1) * FULL_WIDTH,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 23, 8],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#D1D5DC', '#84739D', '#D1D5DC'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.slideDot, { backgroundColor, width: dotWidth }]}
            key={`${idx}`}
          />
        );
      })}
    </View>
  );
};

const useStyles = stylesWithTheme(theme => ({
  container: {
    borderRadius: 16,
    backgroundColor: theme.colors.background,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  slideWrapper: {},
  slideItem: {
    padding: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: 8,
    flexDirection: 'row',
    columnGap: font.w(12),
  },
  slideItemCon: {
    width: FULL_WIDTH,
    padding: 3,
  },
  contentContainer: {
    rowGap: font.h(6),
  },
  text: {
    width: FULL_WIDTH - 32 - 40 - font.w(12),
  },
  planContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(4),
    backgroundColor: '#FFFFFF4D',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  bookIconContainer: {
    backgroundColor: '#FFFFFF4D',
    borderWidth: 1,
    borderColor: '#FFFFFF66',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: SCREEN_HORIZONTAL_SPACING,
  },
  slideContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideDot: {
    width: 12,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 3,
    zIndex: 1,
  },
}));
