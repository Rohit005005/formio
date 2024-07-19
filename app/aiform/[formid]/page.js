"use client";
import FormUi from "@/app/edit-form/[formid]/_components/FormUi";
import { db } from "@/configs";
import { jsonForms } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { json } from "drizzle-orm/pg-core";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LiveAiForm({ params }) {
  const [record, setRecord] = useState();
  const [jsonform, setjsonform] = useState();

  useEffect(() => {
    params && GetFormData();
  }, [params]);
  const GetFormData = async () => {
    const result = await db
      .select()
      .from(jsonForms)
      .where(eq(jsonForms.id, Number(params?.formid)));

    setRecord(result[0]);
    setjsonform(JSON.parse(result[0].jsonform));
  };
  return (
    <div
      className="p-10 flex justify-center items-center h-screen"
      style={{ backgroundImage: record?.background ,backgroundSize:"cover"}}
    >
      {record && (
        <FormUi
          seletedTheme={record?.theme}
          jsonform={jsonform}
          onFieldUpdate={() => console.log()}
          deleteField={() => console.log()}
          editable={false}
          formId={record.id}
          enableSignIn={record?.enableSignIn}
        />
      )}
      <Link
        href={"/"}
        className="flex gap-2 items-center bg-black bg-opacity-10 text-white px-3 py-3 rounded-full fixed bottom-5 left-5 cursor-pointer "
      >
        <Image src={"/logo.png"} width={100} height={100} />
        Built your own AI Form
      </Link>
    </div>
  );
}

export default LiveAiForm;
