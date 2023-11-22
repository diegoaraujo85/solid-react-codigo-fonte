import React, { useEffect, useMemo, useState } from "react";
import { User } from "./types";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("http://127.0.0.1:5031/users");
      const data = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return { users };
};

const UserItem = ({ user }: { user: User }) => {
  return (
    <li>
      <img src={user.avatarUrl} height={64} alt={user.fullName} />
      <p>{user.fullName}</p>
      <small>{user.role}</small>
    </li>
  );
};

const getOnlyActive = (users: User[]): User[] => {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return users.filter(
    (user) => !user.isBanned && new Date(user.lastActivityAt) >= weekAgo
  );
};

const useActiveUsers = () => {
  const { users } = useUsers();

  const activeUsers = useMemo(() => {
    return getOnlyActive(users);
  }, [users]);

  return { activeUsers };
};

export const ActiveUsersList = () => {
  const { activeUsers } = useActiveUsers();

  return (
    <ul>
      {activeUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
