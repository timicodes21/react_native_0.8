import { font } from '@/app/constants/values';
import { useLoader } from '@/app/providers/loader';
import { useAppTheme } from '@/app/providers/theme';
import { AuthHeader } from '@/modules/auth/components';
import { useLogin } from '@/modules/auth/hooks';
import { loginStyles as styles } from '@/modules/auth/styles';
import {
  AppButton,
  AppInput,
  AppScreen,
  AppScrollView,
  AppTouchableOpacity,
  Surface,
  Typography,
} from '@/shared/components';
import { useToggle } from '@/shared/hooks';
import {
  AppleIcon,
  EyeIcon,
  EyeSlashIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
} from '@/shared/icons';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';

export const Login = () => {
  const { showLoader } = useLoader();
  const { theme } = useAppTheme();
  const { show, toggleShow } = useToggle();

  const { control, errors, handleSubmit, onSubmit } = useLogin();

  useEffect(() => {
    showLoader({ text: 'Loading...' });
  }, []);

  return (
    <AppScreen>
      <AppScrollView contentContainerStyle={[styles.container]}>
        <View>
          <AuthHeader headerText="Login" />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <AppInput
                mb="xl"
                leftIcon={<MailIcon width={24} height={24} />}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                errorText={errors?.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <AppInput
                placeholder="Password"
                value={value}
                leftIcon={<LockIcon />}
                onBlur={onBlur}
                onChangeText={onChange}
                errorText={errors?.password?.message}
                secureTextEntry={!show}
                rightIcon={
                  <AppTouchableOpacity onPress={toggleShow}>
                    {show ? <EyeIcon /> : <EyeSlashIcon />}
                  </AppTouchableOpacity>
                }
              />
            )}
          />

          <Typography style={[styles.forgotPasswordText]} color="primary">
            Forgot Password?
          </Typography>
        </View>
        <View>
          <View style={[styles.continueWithContainer]}>
            <View
              style={[styles.line, { borderTopColor: theme.colors.primary }]}
            />
            <Typography color="secondary">or continue with</Typography>
            <View
              style={[styles.line, { borderTopColor: theme.colors.primary }]}
            />
          </View>
          <View style={[styles.socialIconsContainer]}>
            <Surface
              shadow
              borderWidth={1}
              borderColor="primary"
              size={font.h(56)}>
              <GoogleIcon />
            </Surface>
            <Surface
              shadow
              borderWidth={1}
              borderColor="primary"
              size={font.h(56)}>
              <AppleIcon />
            </Surface>
          </View>
        </View>
        <View>
          <AppButton onPress={handleSubmit(onSubmit)}>Login</AppButton>
          <Typography size="small" style={[styles.bottomTextContainer]} center>
            Don’t have an account?
            <Typography size="small" weight="semi-bold" color="primary">
              {' '}
              Signup
            </Typography>
          </Typography>
        </View>
      </AppScrollView>
    </AppScreen>
  );
};

Login.displayName = 'Login';
