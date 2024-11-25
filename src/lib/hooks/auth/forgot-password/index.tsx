import { useMutation } from '@tanstack/react-query';
import { Status } from '../../../../pages/auth/_types/forgot-password';
import { requestEmail } from '../../../services/auth/forgot-password';

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
