import React from "react";
import ChatLabel, { LoadingChatLabel } from "./userLabels/ChatLabel";

const ChatsArea = () => {
  return (
    <>
      <section className="w-full h-full border-l-2 border-gray-300 md:flex md:flex-col border-y-2 md:w-2/5">
        <h1 className="hidden p-4 mx-auto font-semibold md:block">
          ProfileName
        </h1>
        <div className="items-center hidden h-10 border-gray-300 border-y-2 md:flex md:flex-row justify-evenly">
          <div className="pb-1 mt-auto font-semibold border-b-2 border-black">
            PRINCIPAL
          </div>
          <div>GENERAL</div>
          <div>ARCHIVADOS</div>
        </div>
        <div className="overflow-auto">
          <ChatLabel />
          <ChatLabel />
          <ChatLabel />
          <LoadingChatLabel />
          <ChatLabel />
          <ChatLabel />
          <ChatLabel />
          <LoadingChatLabel />
          <ChatLabel />
          <ChatLabel />
          <ChatLabel />
          <LoadingChatLabel />
        </div>
      </section>
    </>
  );
};

export default ChatsArea;
