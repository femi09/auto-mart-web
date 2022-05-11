import React, { useState } from "react";
import InputField from "../common/input-field";
import { CarService } from "../../services/cars";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostCarForm = () => {
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    yearOfManufacture: "",
    description: "",
    condition: "Foreign Used",
    color: "",
    engineSize: "",
    price: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [carImage, setCarImage] = useState<File | null>(null);
  const [imgSrc, setImgSrc] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const carImage = e.target.files && e.target.files[0];
    setCarImage(carImage);
    setImgSrc(URL.createObjectURL(carImage as any));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const newCarData = {
        make: carData.make,
        model: carData.model,
        description: carData.model,
        color: carData.color,
        engineSize: carData.engineSize,
        location: carData.location,
        price: Number(carData.price),
        yearOfManufacture: carData.yearOfManufacture,
        imageUrl: carImage,
        condition: carData.condition,
      };

      console.log("new car data", newCarData);

      setLoading(true);

      const response = await CarService.postCar(newCarData);

      if (response) {
        setLoading(false);
        toast.success("car created successfully");
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      if (
        error?.response.data.msg === "jwt expired" ||
        error?.response.data.msg === "jwt malformed"
      ) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <div>
      <div className="grid place-items-center sm:w-2/3 xl:w-1/2 bg-gray-100 bg-opacity-50 text-green-900 rounded-lg py-20 my-6 mx-2 sm:my-20 sm:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="px-4 sm:px-0 sm:w-2/3"
          action=""
        >
          <div className="flex my-8">
            <div className="w-1/2">
              <InputField
                name="make"
                placeholder="enter car make"
                value={carData.make}
                type="text"
                label="Make"
                handleChange={handleChange}
              />
            </div>

            <div className="w-1/2 ml-4">
              <InputField
                name="model"
                placeholder="enter your model"
                value={carData.model}
                type="text"
                label="Model"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <InputField
                name="price"
                placeholder="0.00"
                value={carData.price}
                type="text"
                label="Price"
                handleChange={handleChange}
              />
            </div>

            <div className="w-1/2 ml-4">
              <InputField
                name="color"
                placeholder="what's the color of your car"
                value={carData.color}
                type="text"
                label="Color"
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="my-6 w-full">
            <label htmlFor="" className="my-2 font-semibold text-green-900">
              Description
            </label>
            <textarea
              name="description"
              value={carData.description}
              id=""
              onChange={(e) => handleChange(e)}
              cols={30}
              rows={10}
              className="w-full border-2 mt-2 focus:outline-none p-4"
            ></textarea>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="w-full mb-4 lg:my-0 lg:w-1/2">
              <InputField
                name="yearOfManufacture"
                placeholder="0.00"
                value={carData.yearOfManufacture}
                type="text"
                label="Year of Manufacture"
                handleChange={handleChange}
              />
            </div>

            <div className="w-full lg:w-1/2 lg:ml-4">
              <InputField
                name="engineSize"
                placeholder="engine size in horse power"
                value={carData.engineSize}
                type="text"
                label="Engine Size"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="my-12">
            <InputField
              name="location"
              placeholder="enter location of car"
              value={carData.location}
              type="text"
              label="Location"
              handleChange={handleChange}
            />
          </div>

          <div className="my-8">
            <input
              type="file"
              placeholder="upload car photo"
              onChange={onFileChange}
              required
            />
            {imgSrc && <img src={imgSrc} alt="" className="w-3/4 h-3/4 my-4" />}
          </div>

          <div className="flex my-8"></div>

          <div className="my-8">
            <select
              name="condition"
              placeholder="select your car's condition"
              id=""
              value={carData.condition}
              onChange={handleChange}
              className="p-2 w-full focus:outline-none border-2"
            >
              <option value="Foreign Used">Foreign Used</option>
              <option value="Fairly Used">Fairly Used</option>
              <option value="New">New</option>
            </select>
          </div>
          <div className="my-4 flex w-full">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-900 text-white font-bold w-1/3 2xl:w-1/4 my-4 mx-auto"
            >
              {loading ? "Posting..." : "Post Car"}
            </button>
          </div>
          <Link to="/">
            <p className="text-center cursor-pointer font-semibold">Go Home</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PostCarForm;
