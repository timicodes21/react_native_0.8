import {
  AuthNavigationEnum,
  AuthStackParamsList,
} from '@/app/navigators/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import z, { email, string } from 'zod';

export type LoginFormValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const LoginSchema = z.object({
    email: email({ message: 'Please enter a valid email' }),
    password: string().trim().min(1, { message: 'Please enter your password' }),
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamsList>>();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = () => {
    navigation.navigate(AuthNavigationEnum.CHOOSE_INTERESTS);
  };

  return {
    control,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
  };
};
