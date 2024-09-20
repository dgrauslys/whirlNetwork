import React from 'react';
import { UserSpacer } from './styles';

const UserBlockSpacer = ({ children }) => {
  return (
    <UserSpacer>
      {children}
    </UserSpacer>
  );
};

export default UserBlockSpacer;
