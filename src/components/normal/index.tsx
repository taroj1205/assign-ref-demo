"use client";
import { Modes } from "@/types";
import React, { memo } from "react";
import { SegmentedControl } from "./segmented-control";
import { Result } from "./result";
import { Other } from "../shared/other";

export const AssignRefDemo = memo(() => {
  const [mode, setMode] = React.useState<Modes>("normal");
  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <h1 className="text-4xl font-bold">Assign Ref Demo</h1>
      <SegmentedControl mode={mode} setMode={setMode} />
      <Result mode={mode} />
      <Other />
    </div>
  );
});

AssignRefDemo.displayName = "AssignRefDemo";
