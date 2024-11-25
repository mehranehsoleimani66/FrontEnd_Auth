export interface RegisterArgs {
  fullname: string;
  username: string;
  password: string;
  email: string;
}
export interface RegisterResponse {
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
