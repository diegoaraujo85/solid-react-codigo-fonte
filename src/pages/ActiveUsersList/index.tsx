import React, { useEffect, useState } from "react";
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

export const ActiveUsersList = () => {
  const { users } = useUsers();

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  return (
    <ul>
      {users
        .filter(
          (user) => !user.isBanned && new Date(user.lastActivityAt) >= weekAgo
        )
        .map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
    </ul>
  );
};
