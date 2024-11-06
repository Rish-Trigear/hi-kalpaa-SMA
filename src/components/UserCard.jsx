import Image from "next/image";
import React from "react";

const UserCard = ({ type }) => {
  return (
    <div className="rounded-2xl odd:bg-hiKalpaaPurple even:bg-hiKalpaaYellow p-4 flex-1 min-w-[130px]">
      <div className=" flex justify-between items-center">
        <span className="text-[10px] bg-white text-green-600 px-2 py-1 rounded-full">
          2024/25
        </span>
        <Image src="/more.png" alt="three dots " width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;