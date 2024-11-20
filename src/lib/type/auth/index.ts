export interface registerType {
  fullname: string;
  username: string;
  password: string;
  email: string;
}
export interface loginType {
  username: string;
  password: string;
  email: string;
}
export interface responseType {
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
