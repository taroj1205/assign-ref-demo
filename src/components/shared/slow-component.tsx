"use client";

import { FC, memo } from "react";

type SlowComponentProps = {
  data: {
    data1: string;
    data2: string;
    data3: string;
  };
};

export const SlowComponent: FC<SlowComponentProps> = memo(() => {
  const numbers = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div className="flex flex-wrap max-w-md max-h-[500px] overflow-y-auto">
      {numbers.map((number, index) => (
        <div key={index} className="bg-gray-200 text-black p-2 rounded-md m-1">
          {number}
        </div>
      ))}
    </div>
  );
});

SlowComponent.displayName = "SlowComponent";
