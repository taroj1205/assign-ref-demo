import { Modes } from "@/types";
import { FC, memo } from "react";

interface ResultProps {
  mode: Modes;
}

export const Result: FC<ResultProps> = memo(({ mode }) => {
  return (
    <div className="text-2xl font-semibold p-4 bg-gray-100 rounded-md shadow-md text-black w-full">
      {mode === "easy"
        ? "You selected the easy mode"
        : mode === "hard"
        ? "You selected the hard mode"
        : "You selected the normal mode"}
    </div>
  );
});

Result.displayName = "Result";
