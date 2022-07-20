import React from "react";
import user from "../assets/user.png";

const UserData = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        <img src={user} alt="user profile pic" className="rounded-full" />
        <div className="flex flex-row items-end gap-10 h-max">
          <h2 className="text-2xl font-semibold ">rom.e.m.e</h2>
          <button className="px-2 border-2 border-gray-200 rounded w-max">
            Editar perfil
          </button>
        </div>
        <h3>Román Lemus Dorantes</h3>
        <p>Contactos: 10</p>
        <p>БУДЬ ГОТОВ ВСЕГДА ГОТОВ 22 primaveras.</p>
      </div>
    </>
  );
};

export default UserData;
