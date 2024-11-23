import { useState } from 'react';
import { useRegister } from '../../../lib/hooks/auth';
import { registerType } from '../../../lib/type/auth';
import Button from '../../shared/button';
import Input from '../../shared/input';
import LinkContainer from '../../shared/link-container';

const RegisterForm = () => {
  const [form, setForm] = useState<registerType>({
    fullname: '',
    username: '',
    password: '',
    email: '',
  });

  const { mutate: mutateRegister } = useRegister();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutateRegister(form);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
    >
      <Input
        placeholder="نام و نام خانوادگی"
        type="string"
        value={form.fullname}
        handleChange={(value) =>
          setForm((prev: any) => ({ ...prev, fullname: value }))
        }
      />
      <Input
        placeholder="نام کاربری"
        type="string"
        value={form.username}
        handleChange={(value) =>
          setForm((prev: any) => ({ ...prev, username: value }))
        }
      />
      <Input
        placeholder="ایمیل کاربری"
        type="email"
        value={form.email}
        handleChange={(value) =>
          setForm((prev: any) => ({ ...prev, email: value }))
        }
      />
      <Input
        placeholder="رمز کاربری"
        type="password"
        value={form.password}
        handleChange={(value) =>
          setForm((prev: any) => ({ ...prev, password: value }))
        }
      />
      <Button>ثبت نام</Button>

      <section className="flex items-center gap-2">
        <span>آیا از قبل اکانتی دارید ؟</span>
        <LinkContainer to="/auth/login" text="ورود کاربری" />
      </section>
    </form>
  );
};

export default RegisterForm;
