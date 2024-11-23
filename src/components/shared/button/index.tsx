interface ButtonProps {
  children: React.ReactNode;

  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button className="bg-blue-700 px-5 py-2 rounded-lg" type={type}>
      {children}
    </button>
  );
};
export default Button;
