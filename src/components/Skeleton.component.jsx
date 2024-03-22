import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonComponent = () => {
  return (
    <div className="col-span-3 justify-center p-5 flex flex-col">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] bg-basic opacity-10 w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 bg-basic opacity-10 w-[250px]" />
          <Skeleton className="h-4 bg-basic opacity-10 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
