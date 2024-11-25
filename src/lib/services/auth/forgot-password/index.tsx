import Request from '..';
import {
  RequestEmailProps,
  ResetPasswordProps,
  VerifyCodeProps,
} from '../../../../pages/auth/_types/forgot-password';

export const requestEmail = async (data: RequestEmailProps) => {
  return await Request.post('/auth/forgot-password/request-email', data);
};

export const verifyCode = async (data: VerifyCodeProps) => {
  return await Request.post('/auth/forgot-password/verify-code', data);
};
export const resetPassword = async (data: ResetPasswordProps) => {
  return await Request.post('/auth/forgot-password/reset-password', data);
};
