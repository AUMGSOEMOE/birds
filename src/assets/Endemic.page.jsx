import React, { useState } from "react";
import { useGetEndemicQuery } from "../store/endpoints/birdEndpoints";
import { BirdList, Container, Skeleton } from "../components";
import { FaChevronDown } from "react-icons/fa";

const EndemicPage = () => {
  const { data, isError, isLoading } = useGetEndemicQuery();

  return (
    <Container>
      <div>
        {/* <div className=" bg-yellow-100 text-yellow-600 mx-auto w-96 p-5 rounded-2xl mt-5">
          <div className="self-center text-sm absolute left-[58%] top-[33%] ">
            <button onClick={handleClick} className=" animate-bounce p-1 ">
              <FaChevronDown />
            </button>
          </div>
          <p className={className}>
            !မြန်မာနိုင်ငံရှိ endemic bird species(မြန်မာတစ်နိုင်ငံ
            တည်းတွင်ရှိသောမျိုးစိတ်)များသည် ဥပဒေ အရ ကာကွယ်ထားသော
            မျိုးစိတ်များဖြစ်ပြီး လူတိုင်းထိန်းသိမ်းစောင့်ရှောက်ရန်လိုအပ်သည်။
          </p>
        </div> */}
        <div className="grid grid-cols-12 gap-5 mt-5">
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
