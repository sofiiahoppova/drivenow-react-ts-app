import { User } from "./user";

export interface LogInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends LogInCredentials {
  fullName: string;
}

export interface SignUpResponse {
  data: {
    user: User;
    accessToken: string;
  };
}

export interface ResetPasswordCredentials {
  password: string;
  token: string;
}
