import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-white py-4 px-20 border-green-900 shadow-md">
      <div className="flex mx-auto justify-between">
        <div>
          <Link to="/">
            <h1 className="text-green-900 font-bold text-2xl">Auto-Mart</h1>
          </Link>
        </div>

        <div className="flex w-1/3 justify-end">
          <Link to="/my_cars">
            <button className="text-white px-8 py-2 rounded-md  font-bold text-base bg-green-900">
              My Cars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
