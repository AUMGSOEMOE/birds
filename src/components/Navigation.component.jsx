import React from "react";
import ContainerComponent from "./Container.component";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <ContainerComponent>
      <div className="flex justify-between py-4 items-center">
        <div className="w-12">
          <img src="./src/assets/Logobird.png" alt="" />
        </div>
        <div className="flex gap-5">
          <Link to={"/"}>
            <button className="">Home</button>
          </Link>
          <Link to={"/birds"}>
            <button className="">Birds</button>
          </Link>
        </div>
        <div>
          <button className="rounded-lg bg-basic px-6 py-1">Let's Fly</button>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default NavigationComponent;
