import React from "react";
import user from "../assets/user.png";

const ChatLabel = () => {
  return (
    <section className="flex flex-row gap-4 p-4 hover:bg-gray-100">
      <img src={user} className="rounded-full w-14 h-14" alt="1111"></img>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">name</h3>
        <div>last message</div>
      </div>
    </section>
  );
};

export const LoadingChatLabel = () => {
  return (
    <section className="flex flex-row gap-4 p-4">
      <div className="bg-gray-200 rounded-full w-14 h-14" />
      <div className="flex flex-col">
        <div className="w-16 h-4 my-2 bg-gray-200 rounded-sm"></div>
        <div className="h-4 bg-gray-200 rounded-sm w-28"></div>
      </div>
    </section>
  );
};

export default ChatLabel;
