export type User = {
  id: string;
  email: string;
  password: string;
};
export type UserInputs = Omit<User, "id">;
