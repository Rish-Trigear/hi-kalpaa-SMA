import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SearchBar */}
      <div className="hidden md:flex items-center gap-2 text-base rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" width={16} height={16} alt="Search Logo" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>

      {/* Profile and other icons */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/message.png"
            width={20}
            height={20}
            alt="messages icon"
          />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="announcements icon"
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-xs text-white">
            0
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] leading-3 text-gray-500 text-right font-medium">
            Admin
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt="Avatar icon"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
