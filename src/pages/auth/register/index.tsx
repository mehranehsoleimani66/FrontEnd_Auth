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
        className="flex  flex-col  justify-center items-center  gap-5 
    mt-10 "
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
          type="email"
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
        <Button type="submit">ثبت نام </Button>
      </form>
    </section>
  );
};
export default Page;
