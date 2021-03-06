import React from "react";

const Car = ({
  car: { imageUrl, make, model, color, yearOfManufacture, price, condition }
}: any) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between shadow-lg py-2 px-2 rounded-sm">
        <div>
          <h3 className="text-m text-green-900 font-semibold">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {make} {model} {yearOfManufacture} {color}
          </h3>
          <p className="mt-2 text-m font-semibold text-green-500">
            N {Number(price).toLocaleString()}
          </p>
          <p className="text-m mt-2 font-medium text-gray-900">{condition}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Car;
