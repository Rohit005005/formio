import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero2() {
  return (
    <section className="pt-8 lg:pb-5 sm:pb-20 pb-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#d987f0,#EAEEFE_66%)]">
      <div className="container">
        <div className="md:flex justify-between  items-center">
          <div className=" sm:ml-10">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl lg:text-6xl sm:text-left text-center font-bold tracking-tighter bg-gradient-to-b from-black to-[#9d26d3] text-transparent bg-clip-text mt-6">
              Create Forms in Seconds
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Streamline your data collection with Formio Create, customize, and
              connect forms with ease, then watch as responses flow seamlessly
              into your spreadsheet, ready for action!
            </p>
            <div className="gap-5 flex items-center sm:justify-start justify-center mt-[30px]">
              <Link href={"/dashboard"}>
                <Button>Create AI form</Button>
              </Link>
              <Link href={"/dashboard"}>
                <Button variant="secondary">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="sm:w-[1600px] w-[350px] flex justify-center  items-center ">
            <Image src={"/file.png"} alt="icon" width={900} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
