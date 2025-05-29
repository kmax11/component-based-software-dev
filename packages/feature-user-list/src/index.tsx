import React from "react";
import { Card } from "@workspace/ui";
import { getMockUsers, capitalize } from "@workspace/utils";

export default function UserList() {
  const users = getMockUsers();
  return (
    <Card title="User List">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {capitalize(user.name)} - {user.email}
          </li>
        ))}
      </ul>
    </Card>
  );
}