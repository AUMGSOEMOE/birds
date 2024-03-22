import React from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const BirdListComponent = ({
  data: { Id, BirdMyanmarName, BirdEnglishName, Description, ImagePath },
}) => {
  return (
    <Dialog>
      <div className=" col-span-3 justify-center p-5 flex flex-col box">
        <DialogTrigger>
          <button className="flex flex-col justify-start">
            <div className="w-48 h-32 mx-auto ">
              <img
                className=" rounded-3xl w-full h-full"
                src={ImagePath}
                alt=""
              />
            </div>
            <div className="mt-3">
              <div className=" text-left w-28">
                <h4 className=" text-sm opacity-50">{BirdEnglishName}</h4>
              </div>
              <h4 className="text-xl text-left">{BirdMyanmarName}</h4>
            </div>
          </button>
        </DialogTrigger>
      </div>
      <DialogContent className="bg-black p-8 w-80 ">
        <DialogHeader className="flex flex-col gap-3">
          <div className="w-3/4 h-32 text-center self-center">
            <img className="rounded-3xl w-full h-full" src={ImagePath} alt="" />
          </div>
          <div>
            <h2 className="opacity-50">{BirdEnglishName}</h2>
            <DialogTitle>{BirdMyanmarName}</DialogTitle>
            <DialogDescription className="text-sm mt-3 overflow-y-scroll h-80">
              {Description}
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BirdListComponent;
