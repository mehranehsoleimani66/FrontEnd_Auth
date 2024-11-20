import { Link } from 'react-router-dom';

interface Props {
  text: string;
  to: string;
}

const LinkContainer: React.FC<Props> = ({ text, to }) => {
  return (
    <Link to={to} className="flex flex-shrink-0">
      {text}
    </Link>
  );
};
export default LinkContainer;
