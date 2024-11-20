import { useGetMe } from '../../lib/hooks/auth';
import LinkContainer from '../shared/link-container';
import Profile from './profile';

const Header = () => {
  const { data: user } = useGetMe();
  return (
    <div className="flex flex-1 w-full bg-blue-400 px-5">
      <section className="w-full flex justify-start items-center gap-5 p-5">
        <LinkContainer text="حانه" to="/" />
        <LinkContainer text="محصولات" to="/products" />
        <LinkContainer text="درباره ما" to="/about" />
      </section>
      <section className="flex justify-end items-center gap-8">
        <LinkContainer text="ورود" to="/auth/login" />
        <LinkContainer text=" ثبت نام" to="/auth/register" />
        {user && <Profile name={user.data.user.fullname} />}
      </section>
    </div>
  );
};
export default Header;
