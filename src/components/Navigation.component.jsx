import React from "react";
import ContainerComponent from "./Container.component";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavigationComponent = () => {
  return (
    <ContainerComponent>
      <div className="flex justify-between py-4 items-center">
        <div className="w-12">
          <img src="src/assets/Logobird.png" alt="" />
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
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="rounded-lg bg-basic px-6 py-1">
                <TiThMenu />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-box text-white">
              <DropdownMenuLabel>Birds in Myanmar</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to={"/birds"}>
                <DropdownMenuItem>Native</DropdownMenuItem>
              </Link>
              <Link to={"/birds/migratory"}>
                <DropdownMenuItem>Migratory</DropdownMenuItem>
              </Link>
              <Link to={"/birds/endemic"}>
                <DropdownMenuItem>Endemic</DropdownMenuItem>
              </Link>
              <Link to={"/birds/endangered"}>
                <DropdownMenuItem>Endangered</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default NavigationComponent;
