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
import CopyButton from "../copy-button/CopyButton";

export const DialogShadCN: React.FC<DialogShadCNProps> = ({
  title,
  body,
  dialogTriggerButtonText,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            {dialogTriggerButtonText}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <CopyButton text={title} />
            </DialogTitle>
            <DialogDescription>{body}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
