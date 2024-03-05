// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={` ${styles.paddingY}`}>
      <div className={`${styles.flexStart} `}>
        <div className="">
          <img src={discount} alt="discount" className="" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="">
          <h1 className=" ">
            The Next <br className="" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex ">
            <GetStarted />
          </div>
        </div>

        <h1 className=" ">Payment Method.</h1>
        <p className={`${styles.paragraph}  `}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`${styles.flexCenter} `}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%]  z-[5]" />

        {/* gradient start */}
        <div className="  " />
        <div className="  " />
        <div className="  " />
        {/* gradient end */}
      </div>

      <div className={` ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
