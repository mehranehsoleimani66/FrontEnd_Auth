import React, { FormEvent } from 'react';
import Button from '../../../shared/button';
import Input from '../../../shared/input';

interface Props {
  handleRequestEmail: (e: FormEvent) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const RequestEmail: React.FC<Props> = ({
  setEmail,
  email,
  handleRequestEmail,
}) => {
  return (
    <form
      onSubmit={handleRequestEmail}
      className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
    >
      <Input
        placeholder="ایمیل خود را وارد کنید"
        type="email"
        value={email}
        handleChange={(value) => setEmail(value)}
      />
      <Button>ارسال ایمیل</Button>
    </form>
  );
};

export default RequestEmail;
