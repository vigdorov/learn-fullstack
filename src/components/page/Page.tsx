import React, {useEffect, useState} from 'react';
import UsersList from '../users-list';
import {usersAPI} from '../../services/usersAPI';

const Page: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    usersAPI.request().then(usersList => {
      setUsers(usersList);
    })
  });

  return (
    <div>
      page
      {users.map((user: any) => user.name)}
      <UsersList/>
    </div>
  );
};

export default React.memo(Page);