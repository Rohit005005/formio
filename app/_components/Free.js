import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Free() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#ddc2f7] py-24 overflow-x-clip overflow-y-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center text-3xl sm:text-[54px] sm:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#9d26d3] text-transparent bg-clip-text mt-5">
            Sign Up for free today
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Yeah, you heard it....Its totally free to use !!! Explore various
            themes and backgrounds with worrying about the cost.
          </p>
          <Image
            src={"/hand.png"}
            width={300}
            height={300}
            className="absolute left-[480px] -top-[50px]"
          />
          <Image
            src={"/hand2.png"}
            width={390}
            height={300}
            className="absolute right-[430px] -top-[70px] rotate-12"
          />
        </div>
        <div className="gap-5 flex items-center justify-center mt-[30px]">
          <Link href={"/dashboard"}>
            <Button>Start for free</Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Free;
