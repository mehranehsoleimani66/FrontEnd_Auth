import React from 'react';

interface Props {
  message?: string;
}

const Successfully: React.FC<Props> = ({
  message = 'پسورد شما با موفقیت بازیابی شد',
}) => {
  return (
    <div className="text-center mt-6">
      <p>{message}</p>
    </div>
  );
};

export default Successfully;
