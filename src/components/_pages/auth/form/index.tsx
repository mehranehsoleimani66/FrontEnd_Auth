import { FormEvent, useState } from 'react';

import { useRequestEmail } from '../../../../lib/hooks/auth/forgot-password';
import { Status } from '../../../../pages/auth/_types/forgot-password';
import RequestEmail from '../request-email';
import RessetPassword from '../reset-password';
import VarifyCode from '../varifyCode';

const Form = () => {
  const [status, SetStatus] = useState<Status>('request-email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleStatus = (value: Status) => {
    SetStatus(value);
  };
  // ! Request
  const { mutate: mutateRequestEmail } = useRequestEmail({ handleStatus });

  // ! Handle Actions
  const handleRequestEmail = (e: FormEvent) => {
    e.preventDefault();
    mutateRequestEmail({ email });
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
      {status === 'verify-code' && <VarifyCode />}
      {status === 'reset-password' && <RessetPassword />}
    </section>
  );
};
export default Form;
