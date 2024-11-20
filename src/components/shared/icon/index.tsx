import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

const ProfileIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 14C8.13401 14 2 16.065 2 20V22H22V20C22 16.065 15.866 14 12 14Z" />
  </svg>
);

export default ProfileIcon;
