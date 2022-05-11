import React, { useEffect, useState } from "react";
import { CarService } from "../services/cars";
import MyCar from "../components/partials/my_car";
import { Link, useNavigate } from "react-router-dom";

const MyCars = () => {
  const [cars, setCars]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    <div className="sm:w-3/4 py-20 mx-8 sm:mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-green-900 font-bold text-lg sm:text-2xl">My Car Adverts</h1>
        <button
          onClick={() => navigate("/post_car")}
          className="py-2 sm:px-4 px-2 text-xs sm:text-base rounded-lg font-semibold cursor-pointer text-white sm:w-1/6 bg-green-900"
        >
          Post New Car
        </button>
      </div>
      {!loading && cars.length === 0 && (
        <div className="text-center w-full my-20 text-green-900 font-bold text-xl">
          No Adverts Found
        </div>
      )}
      {loading ? (
        <div className="text-center w-full my-20 text-green-900 font-bold text-xl">
          Fetching Your Car Adverts...
        </div>
      ) : (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cars.map((car: any) => (
              <Link key={car?._id} to={`/car/details/${car._id}`}>
                <MyCar car={car} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCars;
