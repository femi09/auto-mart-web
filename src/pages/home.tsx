import React, { useEffect, useState } from "react";
import { CarService } from "../services/cars";
import Car from "../components/partials/car";
import { Link } from "react-router-dom";

const Home = () => {
  const [cars, setCars]: any = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await CarService.getAllCars();

        if (response) {
          console.log("response", response);
          setCars(response);
          setLoading(false);
        }
      } catch (error: any) {
        setLoading(false);
        if (error.response && error.response.data) {
          alert(error.response.data.msg);
        }
      }
    };

    getCars();
  }, []);

  return (
    <div className="sm:w-3/4 py-20 mx-6 sm:mx-auto">
      <div className="flex mb-8 sm:mb-12 justify-between items-center">
        <h1 className="text-green-500 font-bold">
          <span className="text-gray-900 font-bold mx-1">WELCOME </span>
          {localStorage.getItem("firstname")
            ? localStorage.getItem("firstname")?.toUpperCase()
            : "COMRADE"}
          !
        </h1>
        <Link
          className="py-2 px-4 block text-center rounded-lg font-semibold cursor-pointer text-white sm:w-1/6 bg-green-900"
          to="/post_car"
        >
          <p>Sell Car</p>
        </Link>
      </div>
      <h1 className="text-green-900 font-bold text-lg sm:text-2xl">
        Latest Cars For Sale
      </h1>
      {!loading && cars.length === 0 && (
        <div className="text-center w-full my-20 text-green-900 font-bold text-xl">
          No Adverts Found
        </div>
      )}
      {loading ? (
        <div className="text-center w-full my-20 text-green-900 font-bold text-xl">
          Fetching Cars Available for Sale...
        </div>
      ) : (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cars.map((car: any) => (
              <Link key={car?._id} to={`/car/details/${car._id}`}>
                <Car car={car} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
