import axios from "axios";

export type PostCarData = {
  make: string;
  model: string;
  description: string;
  price: number;
  location: string;
  yearOfManufacture: string;
  color: string;
  imageUrl: File | null;
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
  seller: {
    _id: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
  };
  color: string;
  imageUrl: string;
  engineSize: string;
  createdAt: string;
  updatedAt: string;
  condition: string;
};

const baseUrl = "http://localhost:5000/api/v1/cars";

export class CarService {
  static async postCar(payload: PostCarData) {
    const accessToken = localStorage.getItem("accessToken");

    const { data } = await axios.post(`${baseUrl}/post_advert`, payload, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

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

  static async deleteCar(id: string | undefined) {
    const accessToken = localStorage.getItem("accessToken");

    const { data } = await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }
}
