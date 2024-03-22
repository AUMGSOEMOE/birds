import React from "react";
import { BirdList, Container, Skeleton } from "../../../components";
import { GiAzulFlake } from "react-icons/gi";
import { useGetQuery } from "../../../store/endpoints/birdEndpoints";

const BirdPage = () => {
  const { data, isError, isLoading } = useGetQuery();
  console.log(data, isError, isLoading);
  return (
    <Container>
      <div>
        <div className="flex justify-center gap-2 items-center text-4xl">
          <GiAzulFlake />
          <h1>BIRDS</h1>
          <GiAzulFlake />
        </div>
        <div className="grid grid-cols-12 gap-5">
          {isLoading ? (
            <>
              {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {data.map((bird) => (
                <BirdList key={bird.Id} data={bird} />
              ))}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BirdPage;
