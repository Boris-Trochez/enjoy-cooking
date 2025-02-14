import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react"; // Import icons

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="relative flex justify-center items-center bg-gray-100 p-2 mt-6 rounded-lg">
      <span className="text-gray-800">{text}</span>
      <div>
        <button
          onClick={handleCopy}
          className="ml-2 p-2 rounded-md hover:bg-gray-200 transition"
        >
          {copied ? (
            <ClipboardCheck className="w-5 h-5 text-green-500" />
          ) : (
            <Clipboard className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {copied && (
          <span className="absolute -top-6 right-2 text-sm text-green-600">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};

export default CopyButton;
