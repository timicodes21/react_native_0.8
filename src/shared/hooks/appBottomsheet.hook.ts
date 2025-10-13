import { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { AppBottomSheetRef } from '../components/AppBottomsheet';

// This hook is used when using the bottom-sheet modal

// Snap points should be an array of percentages ['20%', '40%']
export type SnapPoints = Array<string>;

export const useAppBottomSheet = (points: SnapPoints) => {
  const bottomSheetModalRef = useRef<AppBottomSheetRef>(null);
  const snapPoints = points;
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setIsBottomSheetOpen(true);
    bottomSheetModalRef.current?.present();
  }, [bottomSheetModalRef]);

  const closeDrawer = useCallback(() => {
    setIsBottomSheetOpen(false);
    bottomSheetModalRef.current?.close();
  }, [bottomSheetModalRef]);

  const handleLeave = useCallback(() => {
    if (isBottomSheetOpen) {
      closeDrawer();
      return;
    }
    return true;
  }, [isBottomSheetOpen, closeDrawer]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleLeave);
  }, [handleLeave]);

  return {
    bottomSheetModalRef,
    snapPoints,
    openDrawer,
    closeDrawer,
  };
};
