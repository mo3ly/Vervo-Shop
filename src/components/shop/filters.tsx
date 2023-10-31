"use client";

import React from "react";
import Image from "next/image";

const Filters: React.FC = () => {
  return (
    <div className="p-6 flex-grow flex items-center justify-center content-center">
      <div className="space-y-8  w-full">
        {/* Sport Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>SPORT</span>
            <span>−</span>
          </div>
          <div className="space-y-3 pt-3">
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Lifestyle</span>
            </label>
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Running</span>
            </label>
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Footbal</span>
            </label>
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Soccer</span>
            </label>
            <label className="flex items-center text-xs space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Training & Gym</span>
            </label>
            <button className="text-gray-500 pt-3 text-xs space-x-1 flex items-center w-full justify-end">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
              <span>More</span>
            </button>
          </div>
        </div>

        {/* Best For Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>BEST FOR</span>
            <span>+</span>
          </div>
        </div>

        {/* Brand Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>BRAND</span>
            <span>+</span>
          </div>
        </div>

        {/* Collections Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>COLLECTIONS</span>
            <span>+</span>
          </div>
        </div>

        {/* Fit Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>FIT</span>
            <span>+</span>
          </div>
        </div>

        {/* Colors Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>COLORS</span>
            <span>−</span>
          </div>
          <div className="grid grid-cols-5 gap-4 py-3 px-2">
            <div className="w-4 h-4 rounded bg-red-300"></div>
            <div className="w-4 h-4 rounded bg-blue-300"></div>
            <div className="w-4 h-4 rounded bg-green-300"></div>
            <div className="w-4 h-4 rounded bg-yellow-300"></div>
            <div className="w-4 h-4 rounded bg-orange-300"></div>
            <div className="w-4 h-4 rounded bg-zinc-300"></div>
            <div className="w-4 h-4 rounded bg-slate-300"></div>
            <div className="w-4 h-4 rounded bg-purple-300"></div>
            <div className="w-4 h-4 rounded  bg-pink-300"></div>
            <div className="w-4 h-4 rounded border bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
