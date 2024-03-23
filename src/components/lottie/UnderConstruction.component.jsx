import React from "react";
import Lottie from "react-lottie";
import Developer from "../../lotties/Developer.json";

const UnderConstructionComponent = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: Developer,
  };
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="w-[30%] ">
        <Lottie options={defaultOption} />
      </div>
      <div className=" text-2xl">This page is under construction</div>
    </div>
  );
};

export default UnderConstructionComponent;
