import React from "react";
import FriendLabel from "../components/userLabels/FriendLabel";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full p-4 mx-auto font-semibold text-center border-b-2 border-gray-300">
          <h2>My contacts</h2>
        </div>
        <div className="flex flex-col items-center w-full h-full overflow-auto">
          <FriendLabel />
          <FriendLabel />
          <FriendLabel />
          <FriendLabel />
        </div>
      </div>
    </>
  );
};

export default Home;
