import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { DialogShadCNProps } from "@/types";

export const DialogShadCN: React.FC<DialogShadCNProps> = ({
  title,
  body,
  dialogTriggerButtonText,
  dialogTriggerButtonIcon,
  dialogTriggerButtonIconStyle,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-md ${dialogTriggerButtonIconStyle}`}
          >
            {dialogTriggerButtonText && dialogTriggerButtonText}
            {dialogTriggerButtonIcon}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{body}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
