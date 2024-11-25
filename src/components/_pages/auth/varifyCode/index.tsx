import React, { FormEvent } from 'react';
import Button from '../../../shared/button';
import Input from '../../../shared/input';

interface Props {
  handleVarifyCode: (e: FormEvent) => void;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  code: string;
}

const VarifyCode: React.FC<Props> = ({ code, setCode, handleVarifyCode }) => {
  return (
    <form
      onSubmit={handleVarifyCode}
      className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
    >
      <Input
        placeholder="کد را وارد کنید"
        type="text"
        value={code}
        handleChange={(value) => setCode(value)}
      />
      <Button>ارسال کد</Button>
    </form>
  );
};

export default VarifyCode;
