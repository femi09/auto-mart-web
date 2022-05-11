import React, { useState } from "react";
import InputField from "../components/common/input-field";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { AuthService } from "../services/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("please enter your email address!"),
      password: Yup.string().required("please enter your password!"),
      firstname: Yup.string().required("please enter your firstname"),
      lastname: Yup.string().required("please enter your firstname"),
      address: Yup.string().required("please enter your address"),
      phoneNumber: Yup.string()
        .required("please enter your phone number")
        .max(11, "invalid phone number"),
    }),

    onSubmit: async (values) => {
      try {
        const registerData = {
          email: values.email,
          password: values.password,
          firstname: values.firstname,
          lastname: values.lastname,
          address: values.address,
          phoneNumber: values.phoneNumber,
        };

        setLoading(true);

        const response = await AuthService.register(registerData);

        if (response && response.accessToken) {
          setLoading(false);
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("firstname", response.firstname);
          toast.success("account creation successful!!");
          window.location.replace("/")
        }
      } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.msg);
      }
    },
  });

  return (
    <>
      <h1 className="text-4xl w-1/2 text-center my-8 mx-auto text-green-900">
        Create an account with us
      </h1>
      <div className="grid place-items-center sm:w-2/3 xl:w-1/2 bg-gray-100 bg-opacity-50 text-green-900 rounded-lg py-20 my-20 sm:mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="px-4 sm:px-0 sm:w-2/3"
          action=""
        >
          <div className="flex">
            <div className="w-1/2">
              <InputField
                name="firstname"
                placeholder="enter your firstname"
                value={formik.values.firstname}
                type="text"
                label="Firstname"
                handleChange={formik.handleChange}
              />
            </div>

            <div className="w-1/2 ml-4">
              <InputField
                name="lastname"
                placeholder="enter your lastname"
                value={formik.values.lastname}
                type="text"
                label="Lastname"
                handleChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="my-6">
            <InputField
              name="email"
              placeholder="enter your email"
              value={formik.values.email}
              type="text"
              label="Email"
              handleChange={formik.handleChange}
            />
          </div>

          <div className="flex">
            <div className="w-1/2">
              <InputField
                name="password"
                placeholder="enter your password"
                value={formik.values.password}
                type="password"
                label="Password"
                handleChange={formik.handleChange}
              />
            </div>

            <div className="w-1/2 ml-4">
              <InputField
                name="phoneNumber"
                placeholder="enter your phone number"
                value={formik.values.phoneNumber}
                type="text"
                label="Phone Number"
                handleChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="my-6">
            <InputField
              name="address"
              placeholder="enter your address"
              value={formik.values.address}
              type="text"
              label="Address"
              handleChange={formik.handleChange}
            />
          </div>
          <div className="my-4 flex w-full">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-900 text-white font-bold w-1/2 xl:w-1/3 2xl:w-1/4 my-4 mx-auto"
            >
              {loading ? "Registering..." : "Sign up"}
            </button>
          </div>
          <p className="w-full text-gray-900 text-center">
            Already have an account with us?{" "}
            <Link to="/">
              <span className="text-green-900 font-bold">login</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
