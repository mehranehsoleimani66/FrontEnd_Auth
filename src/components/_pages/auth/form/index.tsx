import { FormEvent, useState } from 'react';

import {
  useRequestEmail,
  useResetPassword,
  useVerifyCode,
} from '../../../../lib/hooks/auth/forgot-password';
import { Status } from '../../../../pages/auth/_types/forgot-password';
import RequestEmail from '../request-email';
import ResetPassword from '../reset-password';
import Successfully from '../successfully/successfully';
import VarifyCode from '../varifyCode';

// Type

const Form = () => {
  // ? State
  const [status, SetStatus] = useState<Status>('request-email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleStatus = (value: Status) => {
    SetStatus(value);
  };

  // ! Request

  const { mutate: mutateRequestEmail } = useRequestEmail({ handleStatus });
  const { mutate: mutateVerifyCode } = useVerifyCode({ handleStatus });
  const { mutate: mutateResetPassword } = useResetPassword({ handleStatus });
  // ! Handle Actions

  const handleRequestEmail = (e: FormEvent) => {
    e.preventDefault();
    mutateRequestEmail({ email });
  };

  const handleVerifyCode = (e: FormEvent) => {
    e.preventDefault();
    mutateVerifyCode({ email, code });
  };
  const handleResetPassword = (e: FormEvent) => {
    e.preventDefault();
    mutateResetPassword({ email, code, newPassword });
  };
  return (
    <section>
      {status === 'request-email' && (
        <RequestEmail
          setEmail={setEmail}
          email={email}
          handleRequestEmail={handleRequestEmail}
        />
      )}
      {status === 'verify-code' && (
        <VarifyCode
          code={code}
          setCode={setCode}
          handleVarifyCode={handleVerifyCode}
        />
      )}
      {status === 'reset-password' && (
        <ResetPassword
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          handleResetPassword={handleResetPassword}
        />
      )}
      {/* Step 4 (Successfully Message) */}
      {status === 'successfully' && <Successfully />}
    </section>
  );
};
export default Form;
