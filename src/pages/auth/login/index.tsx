import { useState } from 'react';
import Button from '../../../components/shared/button';
import Input from '../../../components/shared/input';
import { useLogin } from '../../../lib/hooks/auth';
import { loginType } from '../../../lib/type/auth';

const Page = () => {
  const [form, setForm] = useState<loginType>({
    username: '',
    password: '',
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
        className="flex  flex-col  justify-center items-center  gap-5 
    mt-10 "
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
          type="password"
          placeholder="رمز کاربری"
          value={form.password}
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
        />
        <Button type="submit"> ورود</Button>
      </form>
    </section>
  );
};
export default Page;
