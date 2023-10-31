"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

const menuItems = ["Exclusive", "Men", "Women", "Shoes", "Sneakers"];

const SidebarMenu: React.FC = ({}) => {
  return (
    <div className="p-6 flex-grow flex flex-col items-center justify-center content-center">
      <ul className="space-y-7">
        {menuItems.map((item, index) => (
          <li key={index} className={clsx("uppercase  text-[0.8rem] before:block before:bg-black before:absolute hover:font-semibold transition duration-200 cursor-pointer hover:-translate-x-2", index == 0 && " before:w-5 before:h-px before:-translate-x-12 ml-5 before:translate-y-3")}>
            {item}
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 h-10 bg-gray-50 text-gray-400 rounded w-36 flex items-center content-center justify-center space-x-3 mt-9 mb-2 cursor-pointer">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"></path>
        </svg>
        <span className="text-sm">Filter</span>
      </div>
    </div>
  );
};

export default SidebarMenu;
