import React from "react";
import user from "../../assets/user.png";
import Button from "../Button";

const UserLabel = () => {
  return (
    <div className="flex flex-row px-2 m-2 bg-gray-100 border-2 border-gray-200 rounded w-max h-max">
      <img
        src={user}
        alt="Friend profile pic"
        className="w-20 h-20 mx-2 my-1 rounded-full"
      />{" "}
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold">Friend name</h2>
        <p className="text-sm">Friend status</p>
        <div className="flex flex-row gap-1">
          <Button color={"bg-blue-500"}>New Message</Button>
          <Button color={"bg-red-500"}>Delete Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default UserLabel;
