import React from "react";
import Header from "@/components/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="fixed w-full left-0 top-0 shadow-type-1 z-10">
        <Header />
      </div>
      <div className="mt-[45px] w-full layout-1400px:w-[1400px] pl-[16px] pr-[16px]">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
