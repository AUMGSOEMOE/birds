import React from "react";
import { Outlet } from "react-router-dom";
import { GiAzulFlake } from "react-icons/gi";

const BirdPage = () => {
  return (
    <div>
      <div className=" flex justify-center gap-2 items-center text-4xl">
        <div className="flex justify-center gap-2 items-center">
          <GiAzulFlake />
          <h1>BIRDS</h1>
          <GiAzulFlake />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default BirdPage;
