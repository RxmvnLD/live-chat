import React from "react";
import { FiSend } from "react-icons/fi";
import ChatLabel, { LoadingChatLabel } from "./ChatLabel";

const ChatArea = () => {
  return (
    <main className="flex flex-row justify-center w-full h-full mx-auto bg-white md:w-1/2">
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
      <div className="hidden w-3/5 border-2 border-gray-300 md:inline">
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
          <FiSend className="text-7xl" />
          <p className="text-2xl font-thin">Tus mensajes</p>
          <p className="text-sm">
            Envía fotos y mensajes privados a un amigo o un grupo.
          </p>
          <button className="px-2 py-1 text-sm font-semibold text-white rounded w-max bg-sky-500">
            Enviar mensaje{" "}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatArea;
