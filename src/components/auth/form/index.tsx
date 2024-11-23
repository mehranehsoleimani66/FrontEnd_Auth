import { useState } from 'react';
import RequestEmail from '../request-email';
import RessetPassword from '../reset-password';
import VarifyCode from '../varifyCode';

type StatusProps = 'RequestEmail' | 'resetPassword' | 'varifyCode';

const Form = () => {
  const [status, setStatus] = useState<StatusProps>('RequestEmail');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleStatus = (value: StatusProps) => {
    setStatus(value);
  };
  const handleRequestEmail = (e: any) => {
    e.preventDefault();
    //mutateRequestEmail({ email });
  };
  return (
    <section>
      {status === 'RequestEmail' && (
        <RequestEmail
          setEmail={setEmail}
          email={email}
          handleRequestEmail={handleRequestEmail}
        />
      )}
      {status === 'resetPassword' && <RessetPassword />}
      {status === 'varifyCode' && <VarifyCode />}
    </section>
  );
};
export default Form;
