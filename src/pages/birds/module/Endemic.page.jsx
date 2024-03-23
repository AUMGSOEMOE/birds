import React from "react";
import { useGetEndemicQuery } from "../../../store/endpoints/birdEndpoints";
import { BirdList, Container, Skeleton } from "../../../components";

const EndemicPage = () => {
  const { data, isLoading } = useGetEndemicQuery();
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

export default EndemicPage;
