import React, { useEffect, useState } from "react";
import CarDetails from "./../components/partials/car-details";
import { useParams } from "react-router-dom";
import { CarService } from "../services/cars";

const CarDetailsPage = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await CarService.getCar(id);

        console.log("car", res);

        if (res) {
          setCar(res);
          console.log(res);
        }
      } catch (error) {}
    };
    getCar();
  }, [id]);
  return (
    <div>
      <CarDetails car={car} />
    </div>
  );
};

export default CarDetailsPage;
