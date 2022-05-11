import React, { useEffect, useState } from "react";
import CarDetails from "./../components/partials/car-details";
import { useParams } from "react-router-dom";
import { CarService } from "../services/cars";

const CarDetailsPage = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await CarService.getCar(id);
        
        if (res) {
          setLoading(false);
          setCar(res);
          console.log(res);
        }
      } catch (error: any) {
        setLoading(false);
        if (error.response && error.response.data) {
          alert(error.response.data.msg);
        }
      }
    };
    getCar();
  }, [id]);
  return (
    <div>
      {loading ? (
        <div className="text-center w-full my-20 text-green-900 font-bold text-xl">
          Fetching Car Details...
        </div>
      ) : (
        <CarDetails car={car} />
      )}
    </div>
  );
};

export default CarDetailsPage;
