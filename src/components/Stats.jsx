// eslint-disable-next-line no-unused-vars
import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={` bg-neutral-600 flex justify-center items-center flex-row flex-wrap
       sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`  flex flex-1 justify-start items-center  flex-row m-3 `}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
