import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { HelpCircle } from "lucide-react";

export const TooltipShadCN: React.FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="text-gray-600 hover:text-blue-600">
            <HelpCircle className="w-5 h-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="bg-blue-600 text-white rounded p-1 text-sm">
            Click to learn more about this app
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
