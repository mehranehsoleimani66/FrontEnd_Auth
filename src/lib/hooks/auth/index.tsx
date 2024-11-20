import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMe, Login, Register } from '../../services/auth';

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(Register, {
    onSuccess: (response) => {
      // Set User Data
      queryClient.setQueryData(['user'], response);
      // Set Access Token In LocalStorage
      const accessToken = response.data.token.accessToken;
      localStorage.setItem('accessToken', accessToken);
      // Navigate to the desired route after registration
      navigate('/'); // به مسیر مورد نظر بعد از ثبت‌نام هدایت کنید
    },
    onError: (error) => {
      console.error('Registration Error:', error);
    },
  });
};
export const useGetMe = () => {
  return useQuery(['user'], getMe, {
    onError: (error) => {
      console.error('Fetching User Data Error:', error);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(Login, {
    onSuccess: (response) => {
      // Set User Data
      queryClient.setQueryData(['user'], response);
      // Set Access Token In LocalStorage
      const accessToken = response.data.token.accessToken;
      localStorage.setItem('accessToken', accessToken);
      // Navigate to the desired route after login
      navigate('/'); // به مسیر مورد نظر بعد از لاگین هدایت کنید
    },
    onError: (error) => {
      console.error('Login Error:', error);
    },
  });
};
