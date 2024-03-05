// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} `}>
    <div className={`${styles.flexCenter} `}>
      <div className={`${styles.flexStart} `}>
        <p className=" ">
          <span className="">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="" />
      </div>

      <p className="">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
