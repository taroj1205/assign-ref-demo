"use client";
import { Modes } from "@/types";
import React, { memo, useCallback, useRef } from "react";
import { SegmentedControl } from "./segmented-control";
import { Result } from "./result";
import { Other } from "../shared/other";

export const AssignRefDemo = memo(() => {
  const onChangeModeRef = useRef<(mode: Modes) => void>(() => void 0);

  const onChangeMode = useCallback(
    (mode: Modes) => onChangeModeRef.current(mode),
    []
  );

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <h1 className="text-4xl font-bold">Assign Ref Demo</h1>

      <SegmentedControl
        onChangeMode={onChangeMode}
        onChangeModeRef={onChangeModeRef}
      />
      <Result onChangeModeRef={onChangeModeRef} />
      <Other />
    </div>
  );
});

AssignRefDemo.displayName = "AssignRefDemo";
