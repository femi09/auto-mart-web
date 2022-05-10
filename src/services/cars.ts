import axios from "axios";

export type PostCarData = {
  _id?: string;
  make: string;
  model: string;
  description: string;
  price: number;
  location: string;
  yearOfManufacture: string;
  seller: string;
  color: string;
  imageUrl: string;
  engineSize: string;
  condition: string;
};

export type CarDataResponse = {
  _id: string;
  make: string;
  model: string;
  description: string;
  price: number;
  location: string;
  yearOfManufacture: string;
  seller: string;
  color: string;
  imageUrl: string;
  engineSize: string;
  createdAt: string;
  updatedAt: string;
  condition: string;
};

const baseUrl = "http://localhost:5000/api/v1/cars";

export class CarService {
  static async postCar(payload: PostCarData) {}

  static async getAllCars(): Promise<any> {
    const accessToken = localStorage.getItem("accessToken");

    const { data } = await axios.get(`${baseUrl}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  static async getMyCars(): Promise<any> {
    const accessToken = localStorage.getItem("accessToken");

    const { data } = await axios.get(`${baseUrl}/my_cars`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  static async getCar(id: string | undefined) {
    const accessToken = localStorage.getItem("accessToken");

    const { data } = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }
}
