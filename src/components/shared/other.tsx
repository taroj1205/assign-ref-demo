"use client";

export const Other = () => {
  const numbers = Array.from({ length: 50000 }, () =>
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
};
