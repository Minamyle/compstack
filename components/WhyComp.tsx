import Image from "next/image";
import React from "react";

const WhyComp = () => {
  return (
    <>
      <div className="bg-[#d9dffe] relative py-20 flex flex-col max- padding-container mt-[5rem] p-5">
        
        <div className="absolute w-8 h-8 bg-yellow-500 rounded-full moving-div -top-4 right-10"></div>
        <div className=" items-center justify-center">
          <p className="text-center mb-3 font-bold">Why CompStack</p>
          <h3 className="text-center mb-8">
            Payroll Operations powered by world-class Tech
          </h3>
          <div className="lg:flex items-center gap-[5%] justify-center ">
            <div className="flex border-b lg:border-b-0 lg:border-r border-black  min-h-[12.5rem] px-[5%] flex-col items-center justify-center ">
              <Image
                src="/CustomerSupport.svg"
                alt="suport"
                width={32}
                height={32}
              />{" "}
              <h6 className="text-center font-[600] mt-6">
                Run Payroll In Minutes (Not Days):
              </h6>{" "}
              <p className="text-center mt-2">
                Automate payroll, expenses, tax, and insurance payments.
              </p>
            </div>
            <div className="flex border-b lg:border-b-0 lg:border-r border-black  min-h-[12.5rem] px-[5%] flex-col items-center justify-center ">
              <Image src="/clock.svg" alt="clock" width={32} height={32} />{" "}
              <h6 className="text-center font-[600] mt-6">Data Consistency:</h6>{" "}
              <p className="text-center mt-2">
                Precision and unified data, reducing errors for improved
                consistency.
              </p>
            </div>
            <div className="flex border-b lg:border-b-0 border-black min-h-[12.5rem] px-[5%] flex-col items-center justify-center ">
              <Image src="/Script.svg" alt="script" width={32} height={32} />{" "}
              <h6 className="text-center mb-8">Better Employee Experience:</h6>{" "}
              <p className="text-center mt-2">
                Simplify expense submissions, time-off requests, and approvals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyComp;
