type User = {
  id: number;
  name: string;
};

const getUserById = (id: number): User => {
  if (0 >= id) throw new Error("Id must be greater and different than 0");
  return { id, name: "Trevor" };
};

const sendNotification = (user: User, message: string): string => {
  return `Notification sent to ${user.name}: ${message}`;
};

export const notifyUser = (id: number, message: string): string => {
  let user = null;

  try {
    user = getUserById(id);
  } catch (error) {
    throw new Error((error as Error).message);
  }

  if (!user) throw new Error("User doesn't exist");
  if (message === "") throw new Error("Message must not be empty");

  return sendNotification(user, message);
};
