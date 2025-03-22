import { Modes } from "@/types";
import { assignRef } from "@/utils/ref";
import { FC, memo, RefObject, useState } from "react";

interface ResultProps {
  onChangeModeRef: RefObject<(mode: Modes) => void>;
}

export const Result: FC<ResultProps> = memo(({ onChangeModeRef }) => {
  const [mode, setMode] = useState<Modes>("normal");
  assignRef(onChangeModeRef, setMode);
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
