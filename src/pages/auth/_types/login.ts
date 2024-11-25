export interface LoginArgs {
  username: string;
  password: string;
}

export interface LoginResponse {
  data: {
    user: {
      fullname: string;
      username: string;
      password: string;
    };
    token: {
      accessToken: string;
    };
  };
}
