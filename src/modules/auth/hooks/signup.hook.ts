import { PASSWORD_REGEX } from '@/app/constants/values';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z, { email, string } from 'zod';

export type SignupFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useSignup = () => {
  const SignupSchema = z
    .object({
      email: email({ message: 'Please enter a valid email' }),
      password: string().regex(PASSWORD_REGEX, {
        message:
          'Password must contain atleast 8 characters, an uppercase, lowercase and a number',
      }),
      confirmPassword: string(),
    })
    .refine(
      // check if phone is valid, if false it would display the error message
      data => {
        return data.password === data.confirmPassword;
      },
      {
        path: ['confirmPassword'],
        message: 'Password does not match',
      },
    );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = () => {};

  return {
    control,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
  };
};
