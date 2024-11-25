import React, { FormEvent } from 'react';
import Button from '../../../shared/button';
import Input from '../../../shared/input';

interface Props {
  handleResetPassword: (e: FormEvent) => void;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
}

const ResetPassword: React.FC<Props> = ({
  handleResetPassword,
  setNewPassword,
  newPassword,
}) => {
  return (
    <form
      onSubmit={handleResetPassword}
      className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
    >
      <Input
        placeholder="رمز جدید  وارد کنید"
        type="password"
        value={newPassword}
        handleChange={(value) => setNewPassword(value)}
      />

      <Button>تایید</Button>
    </form>
  );
};

export default ResetPassword;
