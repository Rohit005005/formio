import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FieldEdit({ defaultValue, onUpdate,deleteField }) {
  const [label, setLabel] = useState(defaultValue?.label);
  const [placeholder, setPlaceholder] = useState(defaultValue?.placeholder);

  return (
    <div className="flex  gap-2">
      <Popover>
        <PopoverTrigger>
          <Edit className="h-5 w-5 text-gray-600" />
        </PopoverTrigger>
        <PopoverContent>
          <h2>Edit Fields</h2>
          <div>
            <label className="text-xs">Label name</label>
            <Input
              type="text"
              defaultValue={defaultValue.fieldLabel}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs">Placeholder name</label>
            <Input
              type="text"
              defaultValue={defaultValue.placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </div>
          <Button
            size="sm"
            className="mt-3"
            onClick={() =>
              onUpdate({
                label: label,
                placeholder: placeholder,
              })
            }
          >
            Update
          </Button>
        </PopoverContent>
      </Popover>
      <AlertDialog>
        <AlertDialogTrigger>
          <Trash className="h-5 w-5 text-red-600" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteField()}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default FieldEdit;
