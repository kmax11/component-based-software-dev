import React from "react";
import { Card, Badge } from "@workspace/ui";

const users = [
  { name: "Alice", status: "Active" },
  { name: "Bob", status: "Inactive" },
  { name: "Charlie", status: "Pending" },
];

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "#22c55e";
    case "Inactive":
      return "#ef4444";
    case "Pending":
      return "#f59e42";
    default:
      return "#6b7280";
  }
}

export default function UserStatusList() {
  return (
    <Card title="User Status">
      <ul>
        {users.map((user) => (
          <li key={user.name} style={{ marginBottom: 8 }}>
            {user.name}{" "}
            <Badge color={statusColor(user.status)}>{user.status}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}