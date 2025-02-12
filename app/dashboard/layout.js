"use client";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import SideNav from "./_components/SideNav";

import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "../_components/Header";

function dashboardlayout({ children }) {
  return (
    <SignedIn>
      <SidebarProvider>
        <SideNav />

        <div className=" w-full">
          <Header />

          {children}
        </div>
      </SidebarProvider>
    </SignedIn>
  );
}

export default dashboardlayout;
