import React from "react";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="h-[45px] bg-slate-100 flex justify-center items-center">
      <div className="w-full layout-1400px:w-[1400px] flex justify-between items-center h-full pl-[16px] pr-[16px]">
        <div className="h-[30px]">
          <Link href="/">
            <img className="h-full" src="images/logo.PNG" alt="logo" />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <div className="mr-[8px]">
            <ProfileIcon />
          </div>
          <div>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
