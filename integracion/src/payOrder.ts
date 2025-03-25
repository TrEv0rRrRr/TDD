type User = {
  id: number;
  name: string;
  balance: number;
};

export const users: User[] = [
  { id: 1, name: "Alice", balance: 100 },
  { id: 2, name: "Bob", balance: 50 },
  { id: 3, name: "Charlie", balance: 200 },
];

const getUserById = (id: number): User => {
  const user = users.find((user) => user.id === id);
  if (!user) throw new Error("User not found");
  return user;
};

const chargeUser = (user: User, amount: number): void => {
  if (amount <= 0) throw new Error("Invalid amount");
  if (amount > user.balance) throw new Error("Insufficient balance");
  user.balance -= amount;
};

export const payOrder = (userId: number, amount: number): string => {
  const user = getUserById(userId);
  chargeUser(user, amount);
  return "Payment made successfully";
};
