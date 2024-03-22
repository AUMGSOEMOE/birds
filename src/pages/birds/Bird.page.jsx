import React from "react";
import { Outlet } from "react-router-dom";

const BirdPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BirdPage;
