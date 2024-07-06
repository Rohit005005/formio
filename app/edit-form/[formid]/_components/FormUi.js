import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FieldEdit from "./FieldEdit";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import moment from "moment";
import { toast } from "sonner";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function FormUi({
  jsonform,
  seletedTheme,
  onFieldUpdate,
  deleteField,
  editable = true,
  formId = 0,
  enableSignIn = false,
}) {
  const [formData, setFormData] = useState();
  let formRef = useRef();
  const { user, isSignedIn } = useUser();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (fieldName, itemName, value) => {
    const list = formData?.[fieldName] ? formData?.[fieldName] : [];
    if (value) {
      list.push({
        label: itemName,
        value: value,
      });
      setFormData({
        ...formData,
        [fieldName]: list,
      });
    } else {
      const result = list.filter((item) => item.label == itemName);
      setFormData({
        ...formData,
        [fieldName]: result,
      });
    }
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (enableSignIn) {
      const result = await db.insert(userResponses).values({
        jsonResponse: formData,
        createdAt: moment().format("DD/MM/yyy"),
        formRef: formId,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      if (result) {
        formRef.reset();
        toast("Response Submitted Successfully !!");
      } else {
        toast("Error while saving your form !!");
      }
    } else {
      const result = await db.insert(userResponses).values({
        jsonResponse: formData,
        createdAt: moment().format("DD/MM/yyy"),
        formRef: formId,
      });

      if (result) {
        formRef.reset();
        toast("Response Submitted Successfully !!");
      } else {
        toast("Error while saving your form !!");
      }
    }
  };

  return (
    <form
      ref={(e) => (formRef = e)}
      onSubmit={onFormSubmit}
      className="border p-5 md:w-[600px] rounded-lg"
      data-theme={seletedTheme}
    >
      <h2 className="font-bold text-center text-2xl"> {jsonform?.formTitle}</h2>
      <h2 className="text-sm text-gray-400 text-center">
        {jsonform?.formHeading}
      </h2>

      {jsonform?.formFields?.map((field, index) => (
        <div key={index} className="flex items-center gap-2">
          {field?.fieldType == "select" ? (
            <div className="w-full my-3">
              <Label htmlFor={field?.fieldLabel}>{field?.fieldLabel}</Label>
              <Select
                onValueChange={(v) => handleSelectChange(field?.fieldName, v)}
                required={field?.required}
              >
                <SelectTrigger className="w-full bg-transparent">
                  <SelectValue placeholder={field?.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((option, index) => (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : field.fieldType == "radio" ? (
            <div className="w-full my-3">
              <Label htmlFor={field?.fieldLabel}>{field?.fieldLabel}</Label>
              <RadioGroup required={field?.required}>
                {field.options.map((option, index) => (
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      onClick={() =>
                        handleSelectChange(field?.fieldName, option.label)
                      }
                      value={option.label}
                      id={option.label}
                    />
                    <Label htmlFor={option.label}>{option.label}</Label>
                  </div>
                ))}
                <div className="flex items-center space-x-2"></div>
              </RadioGroup>
            </div>
          ) : field.fieldType == "checkbox" ? (
            <div className="my-3 w-full">
              <Label htmlFor={field?.fieldLabel}>{field?.fieldLabel}</Label>
              {field.options ? (
                field.options?.map((option, index) => (
                  <div className="flex gap-2 items-center">
                    <Checkbox
                      onCheckedChange={(v) =>
                        handleCheckboxChange(field?.fieldLabel, option.label, v)
                      }
                    />
                    <h2 className="text-sm">{option.label}</h2>
                  </div>
                ))
              ) : (
                <div className="flex gap-2 items-center ">
                  <Checkbox required={field?.required} />
                  <h2 className="text-sm">{field.fieldLabel}</h2>
                </div>
              )}
            </div>
          ) : (
            <div className="my-3 w-full">
              <Label htmlFor={field?.fieldLabel}>{field?.fieldLabel}</Label>
              <Input
                type={field?.fieldType}
                placeholder={field?.placeholder}
                name={field?.fieldName}
                className="bg-transparent"
                required={field?.required}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          )}
          {editable && (
            <div>
              <FieldEdit
                defaultValue={field}
                onUpdate={(value) => onFieldUpdate(value, index)}
                deleteField={() => deleteField(index)}
              />
            </div>
          )}
        </div>
      ))}
      {!enableSignIn ? (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      ) : isSignedIn ? (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      ) : (
        <Button>
          <SignInButton>Sign In Before Submit</SignInButton>
        </Button>
      )}
    </form>
  );
}

export default FormUi;
