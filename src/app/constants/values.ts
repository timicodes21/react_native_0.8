import { Dimensions, Platform } from 'react-native';

export const APP_NAME = `LIGHT_NATION`;
export const SCREEN_HORIZONTAL_SPACING = 20;
export const BOTTOMSHEET_HORIZONTAL_MARGIN = 20;
export const INPUT_MARGIN_BOTTOM = 24;
export const TAB_BAR_HEIGHT = Platform.OS === 'android' ? 60 : 55;
export const HIT_SLOP = (
  value: number,
): { top: number; left: number; right: number; bottom: number } => {
  return {
    top: value,
    bottom: value,
    right: value,
    left: value,
  };
};
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const FULL_WIDTH = SCREEN_WIDTH - SCREEN_HORIZONTAL_SPACING * 2;
export const bottomSheetHeight = (height: number) => {
  return String((height / SCREEN_HEIGHT) * 100);
};
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

export const TOUCH_OPACITY = 0.8;

const DEVICE_SCALE_WIDTH = Dimensions.get('window').width / 375;
const DEVICE_SCALE_HEIGHT = Dimensions.get('window').height / 768;

export const font = {
  h: (size: number): number => Math.round(DEVICE_SCALE_HEIGHT * size),
  w: (size: number): number => Math.round(DEVICE_SCALE_WIDTH * size),
};
