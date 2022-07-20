import React from "react";
import UserLabel from "../components/userLabels/UserLabel";

const Discover = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full p-4 mx-auto font-semibold text-center border-b-2 border-gray-300">
          <h2>Find new people 👀</h2>
        </div>
        <div className="flex flex-col items-center w-full h-full overflow-auto">
          <input
            type="text"
            name="user-search"
            className="w-1/2 px-4 py-1 m-2 bg-gray-200 border-2 border-gray-300 rounded-lg"
            placeholder="🔍 search"
          />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
          <UserLabel />
        </div>
      </div>
    </>
  );
};

export default Discover;
