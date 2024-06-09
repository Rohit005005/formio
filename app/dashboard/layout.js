"use client";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import SideNav from "./_components/SideNav";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from "next/image";
import { Instagram } from "lucide-react";

function dashboardlayout({ children }) {
  return (
    <SignedIn>
      <div>
        <div className="md:w-64 fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">{children}</div>
        <div
          href={"/"}
          className="flex items-center bg-primary bg-opacity-50 text-white py-1 px-2 rounded-md fixed bottom-5 right-5 cursor-pointer hover:bg-primary"
        >
           <Popover>
            <PopoverTrigger className="flex items-center gap-2">
              <Image
                className="rounded-full"
                src={"/PXL_20240207_142809828.jpg"}
                width={30}
                height={30}
              />{" "}
              <p className="text-white text-xs">Made by Rohit</p>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <Link
                className="flex gap-2"
                href={"https://www.instagram.com/_me_rohitt._/"}
              >
                <Instagram className="text-primary"/>
                <p>Instagram</p>
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </SignedIn>
  );
}

export default dashboardlayout;
