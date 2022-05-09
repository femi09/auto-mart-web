import axios from "axios";

type LoginData = {
  email: string;
  password: string;
};

type registerData = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  firstname: string;
  lastname: string;
};

type authResponse = {
  email: string;
  accessToken: string;
  id: string;
};

const baseUrl = "http://localhost:5000/api/v1/auth";

export class AuthService {
  static async login(payload: LoginData): Promise<authResponse> {
    const { data } = await axios.post(`${baseUrl}/login`, payload, {
      headers: {
        "content-type": "application/json",
      },
    });

    return data;
  }

  static async register(payload: registerData): Promise<authResponse> {
    const { data } = await axios.post(`${baseUrl}/register`, payload, {
      headers: {
        "content-type": "application/json",
      },
    });

    return data;
  }
}
