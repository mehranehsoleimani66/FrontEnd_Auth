import { useState } from 'react';
import { useLogin } from '../../../../lib/hooks/auth';
import Button from '../../../shared/button';
import Input from '../../../shared/input';
import LinkContainer from '../../../shared/link-container';

const Form = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const { mutate: mutateLogin } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutateLogin(formState);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
    >
      <Input
        placeholder="نام کاربری"
        type="string"
        value={formState.username}
        handleChange={(value) =>
          setFormState((prev) => ({ ...prev, username: value }))
        }
      />
      <Input
        placeholder="رمز کاربری"
        type="password"
        value={formState.password}
        handleChange={(value) =>
          setFormState((prev) => ({ ...prev, password: value }))
        }
      />
      <Button>ورود</Button>

      <section className="flex items-center gap-2">
        <span>آیا از قبل اکانتی ندارید ؟</span>
        <LinkContainer to="/auth/register" text="ثبت نام" />
      </section>
      <LinkContainer to="/auth/forgot-password" text="فراموشی رمز عبور" />
    </form>
  );
};

export default Form;
