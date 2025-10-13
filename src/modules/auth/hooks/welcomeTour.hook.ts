import { bottomSheetHeight } from '@/app/constants/values';
import {
  AuthNavigationEnum,
  AuthStackParamsList,
} from '@/app/navigators/types/auth';
import { AppLanguage, setAppLanguage } from '@/app/providers/i18n';
import { useAppBottomSheet } from '@/shared/hooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from 'react-native';

interface IItem {
  image: any;
  title: string;
  highlight: string;
  content: string;
}

export const useWelcomeTour = (data: IItem[]) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamsList>>();

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguage | null>(
    null,
  );
  const { openDrawer, bottomSheetModalRef, snapPoints, closeDrawer } =
    useAppBottomSheet([bottomSheetHeight(550)]);

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

  const handleSkip = () => {
    navigation.replace(AuthNavigationEnum.LOGIN);
  };

  // 🟣 Function to move to the next slide
  const handleNext = () => {
    if (index < data.length - 1) {
      scrollRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      handleSkip();
    }
  };

  const handleLanguageChange = (checkValue: boolean, id: AppLanguage) => {
    setSelectedLanguage(checkValue ? id : null);
  };

  const saveLanguage = () => {
    if (!selectedLanguage) return;
    setAppLanguage(selectedLanguage);
    closeDrawer();
  };

  return {
    handleNext,
    handleOnScroll,
    scrollX,
    scrollRef,
    handleOnViewableItemsChanged,
    viewabliltyConfig,
    index,
    handleSkip,
    selectedLanguage,
    setSelectedLanguage,
    handleLanguageChange,
    saveLanguage,
    openDrawer,
    bottomSheetModalRef,
    snapPoints,
  };
};
