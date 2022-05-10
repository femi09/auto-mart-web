import React, { useEffect, useState } from "react";
import { CarService } from "../services/cars";
import Car from "../components/partials/car";
import { Link } from "react-router-dom";

const MyCars = () => {
  const [cars, setCars]: any = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await CarService.getMyCars();

        if (response) {
          console.log("response", response);
          setCars(response);
          setLoading(false);
        }
      } catch (error: any) {}
    };

    getCars();
  }, []);

  return (
    <div className="w-3/4 py-20 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-green-900 font-bold text-2xl">
          My Car Adverts
        </h1>
        <button className="py-2 px-4 rounded-lg font-semibold cursor-pointer text-white w-1/6 bg-green-900">
          Post New Car
        </button>
      </div>
      {loading && (
        <div className="text-center w-full my-20 text-green-900 font-bold text-xl">
          Fetching Cars Available for Sale...
        </div>
      )}

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cars.map((car: any) => (
            <Link key={car?._id} to={`/car/details/${car._id}`}>
              <Car car={car} page="my_car" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCars;
