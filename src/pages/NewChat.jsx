import React from "react";
import { FiSend } from "react-icons/fi";
import Button from "../components/Button";

const NewChat = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3">
      <FiSend className="text-7xl" />
      <p className="text-2xl font-thin">Tus mensajes</p>
      <p className="text-sm">
        Envía fotos y mensajes privados a un amigo o un grupo.
      </p>
      <Button color={"bg-blue-500"}>Enviar mensaje</Button>
    </div>
  );
};

export default NewChat;
