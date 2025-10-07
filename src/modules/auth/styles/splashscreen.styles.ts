import { StyleSheet } from 'react-native';

export const splashscreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    marginTop: 4,
  },
  imageRay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    zIndex: -1,
  },
});
