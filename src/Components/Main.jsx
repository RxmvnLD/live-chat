import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import SignUp from "../pages/SignUp";
import Account from "../pages/Account";
import Favourites from "../pages/Favourites";
import NewChat from "../pages/NewChat";
import Discover from "../pages/Discover";
const Main = () => {
  return (
    <main className="hidden w-3/5 border-2 border-gray-300 md:inline">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/newchat" element={<NewChat />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </main>
  );
};

export default Main;
