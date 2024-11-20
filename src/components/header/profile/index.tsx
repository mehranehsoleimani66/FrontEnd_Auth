import React from 'react';
import ProfileIcon from '../../shared/icon';

interface Props {
  name: string;
}

const Profile: React.FC<Props> = ({ name }) => {
  return (
    <section className="flex items-center gap-4 p-2 bg-gray-50 rounded px-6 py-3 hover:bg-gray-100">
      <ProfileIcon />
      <span>{name}</span>
    </section>
  );
};

export default Profile;
