import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <div className="hidden sm:block bg-white py-4 px-20 border-green-900 shadow-md">
        <div className="flex mx-auto justify-between">
          <div>
            <Link to="/">
              <h1 className="text-green-900 font-bold text-2xl">Auto-Mart</h1>
            </Link>
          </div>

          <div className="flex xl:w-1/3 xl:justify-end">
            <Link to="/my_cars">
              <button className="text-white px-8 py-2 rounded-md  font-bold text-base bg-green-900">
                My Cars
              </button>
            </Link>

            <button
              onClick={() => {
                console.log("button clicked");
                localStorage.clear()
                navigate("/login");
              }}
              className="text-red-500 px-8 py-2 rounded-md  font-bold text-base"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden bg-white py-4 px-8 border-green-900 shadow-md">
        <div className="">
          <div>
            <Link to="/">
              <h1 className="text-green-900 font-bold text-2xl">Auto-Mart</h1>
            </Link>
          </div>
        </div>
        <div className="flex mt-8 justify-between items-center">
          <Link to="/my_cars">
            <button className="text-white px-4 py-2 rounded-md font-bold text-xs bg-green-900">
              My Cars
            </button>
          </Link>
          <button
            onClick={() => {
              console.log("button clicked");
              localStorage.removeItem("accessToken");
              navigate("/login");
            }}
            className="text-red-500 px-8 py-2 rounded-md  font-bold text-base"
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
