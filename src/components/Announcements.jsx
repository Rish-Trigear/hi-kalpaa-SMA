import React from "react";
import Image from "next/image";

const announcements = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    color: "hiKalpaaSkyLight",
    description: "Lorem ipsum dolor sit amet , conscetutor adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet , conscetutor adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet , conscetutor adipiscing elit.",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-2">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-hiKalpaaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-2">
              2025/01/01
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor mit constructor anntifs mit go do .
          </p>
        </div>
        <div className="bg-hiKalpaaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-2">
              2025/01/01
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor mit constructor anntifs mit go do .
          </p>
        </div>
        <div className="bg-hiKalpaaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-2">
              2025/01/01
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor mit constructor anntifs mit go do .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
