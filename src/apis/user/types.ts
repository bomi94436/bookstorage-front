export type SignupRequest = {
  userId: string;
  email: string;
  nickname: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
