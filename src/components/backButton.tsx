import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}

export default BackButton;
