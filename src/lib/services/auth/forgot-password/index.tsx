import Request from '..';
import { RequestEmailProps } from '../../../../pages/auth/_types/forgot-password';

export const requestEmail = async (data: RequestEmailProps) => {
  return await Request.post('/auth/forgot-password/request-email', data);
};
