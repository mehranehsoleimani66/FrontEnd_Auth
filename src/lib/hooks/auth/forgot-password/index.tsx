import { useMutation } from '@tanstack/react-query';
import { Status } from '../../../../pages/auth/_types/forgot-password';
import {
  requestEmail,
  resetPassword,
  verifyCode,
} from '../../../services/auth/forgot-password';

interface Props {
  handleStatus: (value: Status) => void;
}

export const useRequestEmail = ({ handleStatus }: Props) => {
  return useMutation({
    mutationFn: requestEmail,
    onSuccess: (response) => {
      handleStatus('verify-code');
      alert('ایمیل ارسال شد');
    },
    onError: (response) => {
      console.log(response);
      alert('ایمیل ارسال نشد');
    },
  });
};

export const useVerifyCode = ({ handleStatus }: Props) => {
  return useMutation({
    mutationFn: verifyCode,
    onSuccess: (response) => {
      handleStatus('reset-password');
      alert('کد تایید شد');
    },
    onError: (response) => {
      alert('کد ارسالی با خطا مواجه شد');
    },
  });
};
export const useResetPassword = ({ handleStatus }: Props) => {
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (response) => {
      handleStatus('successfully');
      alert('پسورد بازیابی شد');
    },
    onError: (response) => {
      alert('خطای بازیابی پسورد');
    },
  });
};
