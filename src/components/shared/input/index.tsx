interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  classname?: string;
  handleChange(value: string): void;
}
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  handleChange,
  classname,
}) => {
  return (
    <input
      className="text-sm bg-gray-100 w-1/3 p-5 text-black"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
export default Input;
