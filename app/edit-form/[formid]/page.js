"use client";
import { db } from "@/configs";
import { jsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { ArrowLeft, Share2, SquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import FormUi from "./_components/FormUi";
import { toast } from "sonner";
import Controller from "./_components/Controller";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RWebShare } from "react-web-share";

function EditForm({ params }) {
  const { user } = useUser();
  const [jsonform, setjsonform] = useState([]);
  const router = useRouter();
  const [updateTrigger, setupdateTrigger] = useState();
  const [record, setRecord] = useState([]);
  const [seletedTheme, setseletedTheme] = useState();
  const [seletedBackground, setseletedBackground] = useState("light");

  useEffect(() => {
    user && GetFormData();
  }, [user]);

  const GetFormData = async () => {
    const result = await db
      .select()
      .from(jsonForms)
      .where(
        and(
          eq(jsonForms.id, params?.formid),
          eq(jsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setRecord(result[0]);
    setjsonform(JSON.parse(result[0].jsonform));
    setseletedBackground(result[0].background);
    setseletedTheme(result[0].theme);
  };

  useEffect(() => {
    if (updateTrigger) {
      setjsonform(jsonform);
      updateJsonFormInDb();
    }
  }, [updateTrigger]);
  const onFieldUpdate = (value, index) => {
    jsonform.formFields[index].fieldLabel = value.label;
    jsonform.formFields[index].placeholder = value.placeholder;
    setupdateTrigger(Date.now());
  };

  const updateJsonFormInDb = async () => {
    const result = await db
      .update(jsonForms)
      .set({
        jsonform: jsonform,
      })
      .where(
        and(
          eq(jsonForms.id, record.id),
          eq(jsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    toast("Updated!!!!");
  };

  const deleteField = (indexToRemove) => {
    const result = jsonform.formFields.filter(
      (item, index) => index != indexToRemove
    );
    jsonform.formFields = result;
    setupdateTrigger(Date.now());
  };

  const updateControllerFields = async (value, columnName) => {
    const result = await db
      .update(jsonForms)
      .set({
        [columnName]: value,
      })
      .where(
        and(
          eq(jsonForms.id, record.id),
          eq(jsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    toast("Updated!!!!");
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <h2
          className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold"
          onClick={() => router.back()}
        >
          <ArrowLeft />
          Back
        </h2>
        <div className="flex gap-3">
          <Link href={"/aiform/" + record?.id} target="_blank">
            <Button className="flex gap-2">
              <SquareArrowOutUpRight className="h-5 w-5" /> Live Preview
            </Button>
          </Link>
          <RWebShare
            data={{
              text: jsonform?.formHeading,
              url: process.env.NEXT_PUBLIC_BASE_URL + "/aiform/" + record?.id,
              title: jsonform?.formTitle,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button className="flex gap-2 bg-green-600 hover:bg-green-700">
              <Share2 className="h-5 w-5" /> Share
            </Button>
          </RWebShare>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border rounded-lg p-5 shadow-md">
          <Controller
            seletedTheme={(value) => {
              updateControllerFields(value, "theme");
              setseletedTheme(value);
            }}
            selectedBackground={(value) => {
              updateControllerFields(value, "background");
              setseletedBackground(value);
            }}
            setSignInEnable={(value) => {
              updateControllerFields(value, "enableSignIn");
            }}
          />
        </div>
        <div
          className="md:col-span-2 border rounded-lg p-6  flex items-center justify-center"
          style={{ backgroundImage: seletedBackground }}
        >
          <FormUi
            seletedTheme={seletedTheme}
            jsonform={jsonform}
            onFieldUpdate={onFieldUpdate}
            deleteField={(index) => deleteField(index)}
          />
        </div>
      </div>
    </div>
  );
}

export default EditForm;
