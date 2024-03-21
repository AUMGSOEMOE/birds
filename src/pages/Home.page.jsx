import React from "react";
import { Container } from "../components";
import { FiFacebook } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { GiHummingbird } from "react-icons/gi";

const HomePage = () => {
  return (
    <Container>
      <div className=" gap-5 h-screen grid grid-cols-12 grid-rows-12">
        <div className="p-8 flex items-center gap-5 col-span-6 row-span-6 box ">
          <div className=" w-64 h-[90%] ">
            <img
              className="h-full rounded-3xl rounded-bl-none rounded-tr-md"
              src="./src/assets/headerjpg.jpg"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <h2 className="text-xs  opacity-70">Bird</h2>
            <h1 className="text-3xl">ငှက်</h1>
            <p className="text-xs  opacity-50">
              ငှက်သည် အမွှေးတောင်ရှိ၍ <br /> အတောင်ပံ နှစ်ဖက်ရှိသော <br />
              သွေးနွေးသတ္တဝါ အမျိုးအစားတွင်ပါဝင်သည်။
            </p>
            <div className="mt-8 w-full  flex justify-end ">
              <img
                className="w-6  opacity-90"
                src="./src/assets/logout.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="p-5 rounded-3xl bg-box col-span-6"></div>
        <div className="pb-5 rounded-3xl flex justify-center items-center   col-span-3 row-span-5">
          <div className=" w-full  h-full box ">
            <div className="flex items-center flex-col justify-center gap-6 w-[95%] h-full">
              <img className="w-2/4" src="./src/assets/feather.png" alt="" />
              <div className="flex items-center  px-5 justify-between w-full font-semibold">
                <h4>Wikipedia</h4>
                <img
                  className="w-6  opacity-90"
                  src="./src/assets/logout.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-3xl pb-5 col-span-3 row-span-5">
          <div className="box w-full h-full">
            <div className="flex flex-col gap-8 mx-8 ">
              <div className=" flex items-center justify-around mt-5 gap-5 rounded-3xl px-6 py-8 border border-secondary">
                <a href="">
                  <div className=" hover:bg-secondary active:scale-95 text-xl rounded-full p-5  border border-secondary ">
                    <LuUser2 />
                  </div>
                </a>
                <a href="">
                  <div className=" hover:bg-secondary active:scale-95 text-xl rounded-full p-5  border border-secondary ">
                    <FiFacebook />
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-between w-full font-semibold">
                <h4>Wikipedia</h4>
                <img
                  className="w-6  opacity-90"
                  src="./src/assets/logout.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 box col-span-8 row-span-4">
          <div className="flex gap-5 justify-center ">
            <div className="h-36 case">
              <h3 className="text-3xl">၈၆၀၀</h3>
              <p className="text-xs w-12">ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)</p>
            </div>
            <div className="case h-28">
              <h3 className="text-3xl">၁၆၀၀</h3>
              <p className="text-xs">မျိုးစုပေါင်း</p>
            </div>
            <div className="case h-28">
              <h3 className="text-3xl">၁၅၅</h3>
              <p className="text-xs ">မျိုးရင်းပေါင်း</p>
            </div>
            <div className="case h-28">
              <h3 className="text-3xl">၂၇</h3>
              <p className="text-xs ">မျိုးစဥ်ပေါင်း</p>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-3xl flex flex-col justify-between bg-box col-span-4 row-span-4">
          <div className="text-6xl ">
            <GiHummingbird />
          </div>
          <div className="text-3xl  flex justify-between items-end">
            <div>
              <p>Let's explore</p>
              <p className=" text-indigo-800">together.</p>
            </div>
            <div>
              <img
                className="w-6  opacity-90"
                src="./src/assets/logout.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
