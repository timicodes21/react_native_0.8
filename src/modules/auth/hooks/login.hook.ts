import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z, { email, string } from 'zod';

export type LoginFormValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const LoginSchema = z.object({
    email: email({ message: 'Please enter a valid email' }),
    password: string().min(1, { message: 'Please enter your password' }),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
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
