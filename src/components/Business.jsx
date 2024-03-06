// eslint-disable-next-line no-unused-vars
import React from "react";
import { features } from "../constants";
import { layout } from "../style";
import Button from "./Button";
import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={` flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb6-" : "mb-0"
      } feature-card`}
    >
      <div className={`  w-[64px] h-[64px] flex justify-center items-center `}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] " />
      </div>
      <div className="">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className=" flex-1 flex-col flex justify-center items-start">
        <h2 className="   font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div
        className={`flex-1 bg-neutral-600 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
