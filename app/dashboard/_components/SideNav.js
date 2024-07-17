"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { db } from "@/configs";
import { jsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import {
  LibraryBig,
  LineChart,
  MessageSquareQuote,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CreateForm from "./CreateForm";

function SideNav() {
  let src;
  useEffect(() => {
    src = window.innerWidth;
    console.log(src);
  }, []);
  const menuList = [
    {
      id: 1,
      name: "My Froms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquareQuote,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldPlus,
      path: "/dashboard/upgrade",
    },
  ];

  const { user } = useUser();
  const [formList, setFormList] = useState();
  const [percentage, setPercentage] = useState(0);

  const path = usePathname();
  useEffect(() => {
    user && GetFormList();
  }, [user]);

  const GetFormList = async () => {
    const result = await db
      .select()
      .from(jsonForms)
      .where(eq(jsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(jsonForms.id));

    setFormList(result);
    const perc = (result.length / 5) * 100;
    setPercentage(perc);
  };

  return (
    <div className="h-screen shadow-md border ">
      {src <= 625 ? (
        <div className="p-5">
          {menuList.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              className={`flex items-center gap-3 p-3 mb-5 hover:bg-primary hover:text-white rounded-lg cursor-pointer text-gray-500 ${
                path == menu.path && `bg-primary text-white`
              }`}
            >
              <menu.icon />
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-5">
          {menuList.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              className={`flex items-center gap-3 p-3 mb-5 hover:bg-primary hover:text-white rounded-lg cursor-pointer text-gray-500 ${
                path == menu.path && `bg-primary text-white`
              }`}
            >
              <menu.icon />
              {menu.name}
            </Link>
          ))}
        </div>
      )}
      <div className="p-6 w-64">
        <CreateForm />
        <div className="my-5">
          <Progress value={percentage}></Progress>
          <h2 className="text-sm mt-2 text-gray-600">
            <strong>{formList?.length}</strong> Out of <strong>5</strong> File
            Created
          </h2>
          <h2 className="text-sm mt-3 text-gray-600">
            Upgrade your plan for unlimited AI form build
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
