import { useState } from 'react';
import Button from '../../../components/shared/button';
import Input from '../../../components/shared/input';
import LinkContainer from '../../../components/shared/link-container';
import { useLogin } from '../../../lib/hooks/auth';
import { loginType } from '../../../lib/type/auth';

const Page = () => {
  const [form, setForm] = useState<loginType>({
    username: '',
    password: '',
    email: '',
  });
  const { mutate: mutateLogin } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutateLogin(form);
  };
  return (
    <section>
      <h1>ورود کاربر </h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
      >
        <Input
          type="text"
          placeholder="نام کاربری"
          value={form.username}
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, username: value }))
          }
        />
        <Input
          type="email"
          placeholder="ایمیل "
          value={form.email}
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, email: value }))
          }
        />

        <Input
          type="password"
          placeholder="رمز کاربری"
          value={form.password}
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
        />
        <Button type="submit"> ورود</Button>
        <LinkContainer to="/auth/forgot-password" text="فراموشی رمز عبور" />
      </form>
    </section>
  );
};
export default Page;
