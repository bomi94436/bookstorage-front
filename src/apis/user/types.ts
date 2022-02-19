export interface IUserInfo {
  email: string;
  nickname: string;
  profileImageUrl: string;
}

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
