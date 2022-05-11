import React from "react";
import PostCarForm from "./../components/partials/post-car-form";

const PostCar = () => {
  return (
    <div>
      <div className="w-2/3 flex justify-center mt-12 font-bold text-2xl text-green-900 mx-auto">
        Post New Car
      </div>
      <PostCarForm />
    </div>
  );
};

export default PostCar;
