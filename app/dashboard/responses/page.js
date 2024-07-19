"use client";
import { db } from "@/configs";
import { jsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import FormItemListResponse from "./_components/FormItemListResponse";

function Responses() {
  const { user } = useUser();
  const [formList, setFormList] = useState();

  useEffect(() => {
    user && getFormList();
  }, [user]);

  const getFormList = async () => {
    const result = await db
      .select()
      .from(jsonForms)
      .where(eq(jsonForms?.createdBy, user?.primaryEmailAddress?.emailAddress));

    setFormList(result);
  };
  return (
    <div className="sm:p-10 p-5">
      <h2 className="font-bold sm:text-3xl text-xl flex items-center justify-between">
        Responses
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        {formList?.map((form, index) => (
          <FormItemListResponse
            formRecord={form}
            jsonForm={JSON.parse(form.jsonform)}
          />
        ))}
      </div>
    </div>
  );
}

export default Responses;
