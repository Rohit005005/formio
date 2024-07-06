"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AiChatSession } from "@/configs/AiModal";
import { useUser } from "@clerk/nextjs";
import { jsonForms } from "@/configs/schema";
import moment from "moment/moment";
import { db } from "@/configs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

function CreateForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState();
  const { user } = useUser();
  const route = useRouter();

  const PROMPT =
    ",On Basis of description please give form in json format with formTitle, formHeading, formFields along with fieldName, fieldTitle, placeholder, fieldLabel, fieldType, required fields in Json format. Only give Json format in curly braces nothing else is needed, dont include '''json''' in it. Also dont include any submit button field";

  async function onFormCreate() {
    setLoading(true);
    const result = await AiChatSession.sendMessage(
      "Description:" + userInput + PROMPT
    );
    console.log(result.response.text());
    if (result.response.text()) {
      const resp = await db
        .insert(jsonForms)
        .values({
          jsonform: result.response.text(),
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD/MM/YYYY"),
        })
        .returning({ id: jsonForms.id });
      console.log("new form id", resp[0].id);
      if (resp[0].id) {
        route.push("/edit-form/" + resp[0].id);
      }
      setLoading(false);
    }
    setLoading(false);
  }
  return (
    <div>
      <Button className="w-full" onClick={() => setOpenDialog(true)}>+ Create form</Button>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-2"
                placeholder="Write description of your form"
                onChange={(e) => setUserInput(e.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button
                  variant="destructive"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
                <Button disabled={loading} onClick={() => onFormCreate()}>
                  {loading ? <Loader2 className="animate-spin" /> : "Create"}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateForm;
