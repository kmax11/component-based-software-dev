export type User = {
  id: number;
  name: string;
  email: string;
};

export function getMockUsers(): User[] {
  return [
    { id: 1, name: "Alice", email: "alice@email.com" },
    { id: 2, name: "Bob", email: "bob@email.com" },
    { id: 3, name: "Charlie", email: "charlie@email.com" },
  ];
}