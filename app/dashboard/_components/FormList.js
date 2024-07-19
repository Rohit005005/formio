"use client";
import { db } from "@/configs";
import { jsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import FormListItem from "./FormListItem";

function FormList() {
  const { user } = useUser();
  const [formList, setFormList] = useState();
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
  };
  return (
    <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-1 gap-5">
      {formList?.map((form, index) => (
        <div key={index}>
          <FormListItem
            jsonForm={JSON.parse(form.jsonform)}
            formRecord={form}
            refreshData={GetFormList}
          />
        </div>
      ))}
    </div>
  );
}

export default FormList;
