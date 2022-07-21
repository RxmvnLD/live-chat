import React, { useEffect } from "react";
import ChatsArea from "./components/ChatsArea";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-full h-full md:h-[880px] md:py-5 fixed">
        <div className="flex flex-row justify-center w-full h-full mx-auto bg-white md:w-1/2">
          <ChatsArea />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
