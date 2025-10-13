import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '@/app/providers/theme';
import { AppTouchableOpacity } from './AppTouchableOpacity';
import { XIcon } from 'lucide-react-native';
import { Surface } from './Surface';
import {
  font,
  SCREEN_HORIZONTAL_SPACING,
  SCREEN_WIDTH,
} from '@/app/constants/values';

export interface AppBottomSheetProps
  extends Omit<BottomSheetModalProps, 'snapPoints' | 'children'> {
  children?: ReactNode;
  snapPoints?: string[];
  enablePanDownToClose?: boolean;
  dismissOnBackdropPress?: boolean;
  backgroundColor?: string;
  handleIndicatorStyle?: ViewStyle;
  scrollable?: boolean;
  showCloseIcon?: boolean;
  noHorizontalSpacing?: boolean;
}
export interface AppBottomSheetRef {
  present: () => void;
  close: () => void;
  dismiss: () => void;
  isOpen: () => boolean;
}

/**
 * A highly reusable, theme-aware Bottom Sheet wrapper.
 * Supports:
 * - gestures & snapping
 * - keyboard avoidance
 * - theming & shadow consistency
 * - type-safe ref control
 */

export const AppBottomSheet = forwardRef<
  AppBottomSheetRef,
  AppBottomSheetProps
>(
  (
    {
      children,
      snapPoints: customSnapPoints,
      enablePanDownToClose = true,
      dismissOnBackdropPress = true,
      keyboardBehavior = 'interactive',
      onDismiss,
      backgroundColor,
      handleIndicatorStyle,
      scrollable = true,
      showCloseIcon,
      noHorizontalSpacing,
      ...props
    },
    ref,
  ) => {
    const { theme } = useAppTheme();
    const sheetRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(
      () => customSnapPoints ?? ['50%', '85%'],
      [customSnapPoints],
    );

    const handlePresent = useCallback(() => sheetRef.current?.present(), []);
    const handleClose = useCallback(() => sheetRef.current?.close(), []);

    // expose ref methods
    useImperativeHandle(ref, () => ({
      present: handlePresent,
      close: handleClose,
      dismiss: () => sheetRef.current?.dismiss(),
      isOpen: () => !!sheetRef.current,
    }));

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior={dismissOnBackdropPress ? 'close' : 'none'}
          opacity={0.8}
        />
      ),
      [dismissOnBackdropPress],
    );

    const backgroundStyle = useMemo(
      () => ({
        backgroundColor: backgroundColor ?? theme.colors.background,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }),
      [backgroundColor, theme],
    );

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={sheetRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={[
            styles.handleIndicator,
            { backgroundColor: theme.colors.secondary },
            handleIndicatorStyle,
          ]}
          enablePanDownToClose={enablePanDownToClose}
          backgroundStyle={backgroundStyle}
          keyboardBehavior={keyboardBehavior}
          onDismiss={onDismiss}
          {...props}>
          {showCloseIcon && (
            <View style={[styles.closeCon]}>
              <AppTouchableOpacity onPress={handleClose}>
                <Surface color="grayBg" size={font.h(32)}>
                  <XIcon
                    color={theme.colors.main}
                    size={font.h(20)}
                    strokeWidth={2.5}
                  />
                </Surface>
              </AppTouchableOpacity>
            </View>
          )}
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            {scrollable ? (
              <BottomSheetScrollView
                contentContainerStyle={[
                  styles.contentContainer,
                  {
                    paddingHorizontal: noHorizontalSpacing
                      ? 0
                      : SCREEN_HORIZONTAL_SPACING,
                  },
                ]}
                keyboardShouldPersistTaps="handled">
                {children}
              </BottomSheetScrollView>
            ) : (
              children
            )}
          </KeyboardAvoidingView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

AppBottomSheet.displayName = 'AppBottomSheet';

const styles = StyleSheet.create({
  handleIndicator: {
    width: 40,
    // height: 4,
    borderRadius: 2,
    // alignSelf: 'center',
    // marginVertical: 8,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  closeCon: {
    position: 'absolute',
    right: SCREEN_HORIZONTAL_SPACING,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
});
