import { useAppTheme } from '@/app/providers/theme';
import { XIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 8,
    alignItems: 'center',
    borderTopEndRadius: 300,
    borderTopStartRadius: 300,
    borderWidth: 0,
    position: 'relative',
    top: -50,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignSelf: 'flex-end',
  },
  indicator: {
    width: 69,
    height: 5,
    borderRadius: 100,
    position: 'absolute',
    top: -10000,
  },
  closeCon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -20,
  },
});

interface IProps {
  onClose?: () => void;
}

const BottomSheetIndicator: React.FC<IProps> = ({ onClose = () => {} }) => {
  const { theme } = useAppTheme();
  return (
    <View style={[styles.container]}>
      <TouchableOpacity activeOpacity={0.5} onPress={onClose}>
        <View
          style={[
            styles.closeCon,
            { backgroundColor: theme.colors.background },
          ]}>
          <XIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetIndicator;
