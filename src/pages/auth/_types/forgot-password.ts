export type Status =
  | 'request-email'
  | 'verify-code'
  | 'reset-password'
  | 'successfully';

export interface RequestEmailProps {
  email: string;
}

export interface VerifyCodeProps {
  email: string;
  code: string;
}

export interface ResetPasswordProps {
  email: string;
  code: string;
  newPassword: string;
}
