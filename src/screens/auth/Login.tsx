import { stylesWithTheme, useAppTheme } from '@/app/providers/theme';
import CustomButton from '@/shared/components/CustomButton';
import ScreenWrapper from '@/shared/components/ScreenWrapper';
import React from 'react';
import { Text, View } from 'react-native';

const Login = () => {
  const styles = navStyles();
  const { changeTheme, currentTheme } = useAppTheme();
  return (
    <ScreenWrapper style={{ paddingTop: 100 }}>
      <View>
        <Text style={styles.header}>Login</Text>
      </View>
      <CustomButton
        containerStyle={styles.button}
        onPress={() => {
          changeTheme(currentTheme === 'light' ? 'dark' : 'light');
        }}>
        Show Toast
      </CustomButton>
    </ScreenWrapper>
  );
};

export default Login;

const navStyles = stylesWithTheme(theme => ({
  header: { color: theme.colors.error },
  button: {
    marginHorizontal: theme.spacing.lg,
  },
}));
