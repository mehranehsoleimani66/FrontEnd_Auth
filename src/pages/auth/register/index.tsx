import { useState } from 'react';
import Button from '../../../components/shared/button';
import Input from '../../../components/shared/input';
import { useRegister } from '../../../lib/hooks/auth';
import { registerType } from '../../../lib/type/auth';

const Page = () => {
  const [form, setForm] = useState<registerType>({
    username: '',
    fullname: '',
    password: '',
    email: '',
  });
  const { mutate: mutateRegister } = useRegister();
  const submitHandler = (e: any) => {
    e.preventDefault();
    mutateRegister(form);
    console.log(form);
  };

  return (
    <section>
      <h1>ورود کاربر </h1>
      <form
        onSubmit={submitHandler}
        className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
      >
        <Input
          type="text"
          placeholder="نام و نام خانوادگی "
          value={form.fullname}
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, fullname: value }))
          }
        />

        <Input
          type="text"
          placeholder="نام کاربری"
          value={form.username}
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, username: value }))
          }
        />
        <Input
          type="text"
          placeholder=" ایمیل  "
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
        <Button type="submit">ثبت نام </Button>
      </form>
    </section>
  );
};
export default Page;
