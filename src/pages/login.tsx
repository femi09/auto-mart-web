import React from "react";
import InputField from "../components/common/input-field";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth";

const Login = () => {
  const navigate: NavigateFunction = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("please enter your email address!"),
      password: Yup.string().required("please enter your password!"),
    }),

    onSubmit: async (values) => {
      try {
        const loginData = {
          email: values.email,
          password: values.password,
        };
        console.log("login data", loginData);
        const response = await AuthService.login(loginData);

        if (response && response.accessToken) {
          localStorage.setItem("accessToken", response.accessToken);
          console.log("response", response);
          navigate("/");
        }
      } catch (error: any) {
        console.log("error", error.response.data.msg);
      }
    },
  });

  return (
    <div className="grid place-items-center grid place-items-center sm:w-2/3 xl:w-1/2 bg-gray-100 bg-opacity-50 text-green-900 rounded-lg py-20 my-20 sm:mx-auto">
      <form
        onSubmit={formik.handleSubmit}
        className="px-4 sm:px-0 sm:w-2/3 xl:w-1/2"
        action=""
      >
        <div className="my-6 w-full">
          <InputField
            name="email"
            placeholder="enter your email"
            value={formik.values.email}
            type="text"
            label="Email"
            handleChange={formik.handleChange}
          />
        </div>

        <div className="my-6 w-full">
          <InputField
            name="password"
            placeholder="enter your password"
            value={formik.values.password}
            type="password"
            label="Password"
            handleChange={formik.handleChange}
          />
        </div>
        <div className="my-4 flex w-full">
          <button className="px-4 py-2 rounded-lg bg-green-900 text-white font-bold w-1/4 my-4 mx-auto">
            Login
          </button>
        </div>
        <p className="w-full text-gray-900 text-center">
          Don't have an account with us?{" "}
          <Link to="/register">
            <span className="text-green-900 font-bold cursor-pointer">
              sign up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
