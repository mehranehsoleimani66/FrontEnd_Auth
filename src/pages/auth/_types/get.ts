export interface GetMeResponse {
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
