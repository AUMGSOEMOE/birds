import React from "react";
import { BirdList, Container, Skeleton } from "../../../components";
import { useGetQuery } from "../../../store/endpoints/birdEndpoints";

const BirdPage = () => {
  const { data, isError, isLoading } = useGetQuery();
  return (
    <Container>
      <div>
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
