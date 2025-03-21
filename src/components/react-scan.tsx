"use client";
import { memo, useEffect } from "react";
import { scan } from "react-scan";

export const ReactScan = memo(() => {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, [[]]);
  return null;
});

ReactScan.displayName = "ReactScan";
