import { Modes } from "@/types";
import { FC, memo } from "react";

interface ResultProps {
  mode: Modes;
}

export const Result: FC<ResultProps> = memo(({ mode }) => {
  return (
    <div className="text-2xl font-semibold p-4 bg-gray-100 rounded-md shadow-md">
      Current mode: <span className="text-indigo-600">{mode}</span>
    </div>
  );
});

Result.displayName = "Result";
