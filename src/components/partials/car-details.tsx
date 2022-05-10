import React from "react";

const CarDetails = ({ car }: any) => {
  return (
    <div className="bg-white px-20 my-20 flex justify-between">
      <div className="w-1/2">
        <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-1/2 lg:aspect-none">
          <img
            src={car.imageUrl}
            alt=""
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <h1 className="text-green-900 text-2xl font-bold my-8">Car Details</h1>

        <div className="my-8 bg-gray-100 bg-opacity-25 px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="py-4">
              <p className="text-green-900 font-bold">Make</p>
              <p>{car.make}</p>
            </div>

            <div>
              <p className="text-green-900 font-bold">Model</p>
              <p>{car.model}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="py-4">
              <p className="text-green-900 font-bold">Condition</p>
              <p>{car.condition}</p>
            </div>

            <div>
              <p className="text-green-900 font-bold">color</p>
              <p>{car.color}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="py-4">
              <p className="text-green-900 font-bold">year of manufacture</p>
              <p>{car.yearOfManufacture}</p>
            </div>

            <div className="">
              <p className="text-green-900 font-bold">price</p>
              <p>{car.price}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="py-4">
              <p className="text-green-900 font-bold">location</p>
              <p>{car.location}</p>
            </div>

            <div>
              <p className="text-green-900 font-bold">engine size</p>
              <p>{car.engineSize}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-md w-1/2 ml-12 h-1/2 py-12 px-8">
        <h1 className="text-4xl font-bold text-gray-900">
          {car.make} {car.model} {car.yearOfManufacture} {car.color}
        </h1>
        <h1 className="text-4xl font-bold text-green-900 my-8">
          N {Number(car.price).toLocaleString()}
        </h1>

        <div className="bg-gray-100 p-4 bg-opacity-25 rounded-lg">
          <h1 className="text-gray-900 font-bold text-2xl mt-4 mb-8">
            Seller Info
          </h1>

          <div className="px-2 my-4">
            <h1 className="text-green-900 font-bold text-xl">Name</h1>
            <p className="font-bold text-lg text-gray-900">
              {car.seller?.firstname} {car.seller?.lastname}
            </p>
          </div>

          <div className="px-2 my-4">
            <h1 className="text-green-900 font-bold text-xl">Phone Number</h1>
            <p className="font-bold text-lg text-gray-900">
              {car.seller?.phoneNumber}
            </p>
          </div>

          <div className="px-2 my-4">
            <h1 className="text-green-900 font-bold text-xl ">Email</h1>
            <p className="font-bold text-lg text-gray-900">
              {car.seller?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
