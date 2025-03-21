"use client";
import { memo, useEffect } from "react";
import { scan } from "react-scan";

export const Other = memo(() => {
  const numbers = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );

  useEffect(() => {
    scan({
      enabled: true,
    });
  }, [[]]);

  return (
    <div className="flex flex-wrap max-w-md">
      {numbers.map((number, index) => (
        <div key={index} className="bg-gray-200 text-black p-2 rounded-md m-1">
          {number}
        </div>
      ))}
    </div>
  );
});

Other.displayName = "Other";
