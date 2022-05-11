import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CarService } from "../services/cars";
import { toast } from "react-toastify";

const DeleteCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteCar = async () => {
    try {
      const res = await CarService.deleteCar(id);

      console.log("res", res);
      if (res) {
        toast.success(res.msg)
        navigate("/my_cars");
      }
    } catch (error) {}
  };
  return (
    <div className="w-1/2 flex justify-center items-center my-20 mx-auto">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl text-green-900">
          Are you sure you want to delete this Car Advert?
        </h1>
        <div className="flex justify-center my-8">
          <button
            onClick={handleDeleteCar}
            className="bg-red-500 text-white rounded-md py-1 px-4"
          >
            Yes
          </button>
          <Link to="/my_cars">
            <button className="bg-green-500  rounded-md text-white mx-8 py-1 px-4">
              No
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
