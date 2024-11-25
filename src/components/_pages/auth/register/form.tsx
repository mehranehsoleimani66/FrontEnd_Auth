import { useState } from 'react';
import { useRegister } from '../../../../lib/hooks/auth';
import { RegisterArgs } from '../../../../pages/auth/_types/register';
import Button from '../../../shared/button';
import Input from '../../../shared/input';
import LinkContainer from '../../../shared/link-container';

const Register = () => {
  const [formState, setFormState] = useState<RegisterArgs>({
    fullname: '',
    username: '',
    password: '',
    email: '',
  });

  const { mutate: mutateRegister } = useRegister();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutateRegister(formState);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl border-2 flex flex-col gap-6 w-[350px] m-auto"
    >
      <Input
        placeholder="نام و نام خانوادگی"
        type="string"
        value={formState.fullname}
        handleChange={(value) =>
          setFormState((prev) => ({ ...prev, fullname: value }))
        }
      />
      <Input
        placeholder="نام کاربری"
        type="string"
        value={formState.username}
        handleChange={(value) =>
          setFormState((prev) => ({ ...prev, username: value }))
        }
      />
      <Input
        placeholder="ایمیل کاربری"
        type="email"
        value={formState.email}
        handleChange={(value) =>
          setFormState((prev) => ({ ...prev, email: value }))
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
      <Button>ثبت نام</Button>

      <section className="flex items-center gap-2">
        <span>آیا از قبل اکانتی دارید ؟</span>
        <LinkContainer to="/auth/login" text="ورود کاربری" />
      </section>
    </form>
  );
};

export default Register;
