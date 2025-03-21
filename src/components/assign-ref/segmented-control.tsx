import type { Modes } from "@/types";
import { assignRef } from "@/utils/ref";
import { FC, memo, RefObject, useCallback, useState } from "react";

interface SegmentedControlProps {
  onChangeMode: (mode: Modes) => void;
  onChangeModeRef: RefObject<(mode: Modes) => void>;
}

const modesArray = ["easy", "normal", "hard"] as const;

export const SegmentedControl: FC<SegmentedControlProps> = memo(
  ({ onChangeModeRef, onChangeMode }) => {
    const [mode, setMode] = useState<Modes>("normal");
    assignRef(onChangeModeRef, setMode);

    const handleClick = useCallback(
      (m: Modes) => {
        setMode(m);
        onChangeMode(m);
      },
      [onChangeMode]
    );

    return (
      <div className="inline-flex rounded-md shadow-sm">
        {modesArray.map((m) => (
          <button
            key={m}
            className={`px-6 py-3 text-lg font-medium ${
              mode === m
                ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                : "bg-white text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            } ${m === modesArray[0] ? "rounded-l-md" : ""} ${
              m === modesArray[modesArray.length - 1] ? "rounded-r-md" : ""
            } ${m !== modesArray[0] ? "ml-px" : ""}`}
            onClick={() => handleClick(m)}
          >
            {capitalize(m)}
          </button>
        ))}
      </div>
    );
  }
);

SegmentedControl.displayName = "SegmentedControl";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
