import Image from "next/image";
import React from "react";

function ProductShow() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#ddc2f7] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center text-3xl sm:text-[54px] sm:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#9d26d3] text-transparent bg-clip-text mt-5">
            A more effective way to make forms
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly make forms in Seconds, with custom designs and easy
            response exports.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            className="mt-10"
            src={"/productshow.png"}
            width={700}
            height={500}
          />
          <Image
            className="absolute sm:-right-10 sm:top-56 lg:right-36 lg:top-56 -right-10 top-36 lg:w-[250px] sm:w-[200px] w-[100px]"
            src={"/hand.png"}
            width={200}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductShow;
