export type User = {
  id?: string | number;
  email: string;
  password: number;
};

export type UserInputs = Omit<User, "id">;
