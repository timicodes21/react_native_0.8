import { font } from '@/app/constants/values';
import {
  AuthNavigationEnum,
  AuthScreenNavigationProps,
} from '@/app/navigators/types/auth';
import { useLoader } from '@/app/providers/loader';
import { useAppTheme } from '@/app/providers/theme';
import { AuthHeader } from '@/modules/auth/components';
import { useSignup } from '@/modules/auth/hooks';
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

export const Signup: AuthScreenNavigationProps<AuthNavigationEnum.SIGN_UP> = ({
  navigation,
}) => {
  const { showLoader } = useLoader();
  const { theme } = useAppTheme();
  const { show, toggleShow } = useToggle();

  const { control, errors, handleSubmit, onSubmit } = useSignup();

  useEffect(() => {
    showLoader({ text: 'Loading...' });
  }, []);

  return (
    <AppScreen>
      <AppScrollView contentContainerStyle={[styles.container]}>
        <View>
          <AuthHeader headerText="Signup" />
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
                mb="xl"
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

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value, onBlur } }) => (
              <AppInput
                placeholder="Confirm Password"
                value={value}
                leftIcon={<LockIcon />}
                onBlur={onBlur}
                onChangeText={onChange}
                errorText={errors?.confirmPassword?.message}
                secureTextEntry={!show}
              />
            )}
          />
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
          <AppButton onPress={handleSubmit(onSubmit)}>Sign Up</AppButton>
          <Typography size="small" style={[styles.bottomTextContainer]} center>
            Already have an account?
            <Typography
              size="small"
              weight="semi-bold"
              color="primary"
              onPress={() => navigation.replace(AuthNavigationEnum.LOGIN)}>
              {' '}
              Log in
            </Typography>
          </Typography>
        </View>
      </AppScrollView>
    </AppScreen>
  );
};

Signup.displayName = 'Signup';
