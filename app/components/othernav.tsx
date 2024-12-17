'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Car_Details from "./details";

export default function SNavbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch min-h-screen">
      {/* Sidebar - Left */}
      <aside
  className={`fixed top-0 left-0  m-0 p-0 h-screen w-auto bg-white border-r shadow-md transform transition-transform duration-300 z-50 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } md:relative md:translate-x-0 pb-0`}
>
  <div className="p-6 space-y-6">
  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Type</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="text-blue-600" defaultChecked />
            <span className="text-gray-700">
              Sport <span className="text-gray-400">(10)</span>
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="text-blue-600" defaultChecked />
            <span className="text-gray-700">
              SUV <span className="text-gray-400">(12)</span>
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-gray-700">
              MPV <span className="text-gray-400">(16)</span>
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-gray-700">
              Sedan <span className="text-gray-400">(20)</span>
            </span>
          </label>
        </li>
      </ul>
    <div>
    </div>

    <div>
      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
        Capacity
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked />
            <span className="text-gray-700">
              2 Person <span className="text-gray-400">(10)</span>
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-gray-700">
              4 Person <span className="text-gray-400">(14)</span>
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-gray-700">
              6 Person <span className="text-gray-400">(12)</span>
            </span>
          </label>
        </li>
        <li>
          <label className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked />
            <span className="text-gray-700">
              8 or More <span className="text-gray-400">(16)</span>
            </span>
          </label>
        </li>
      </ul>
    </div>

    {/* Price Filter */}
    <div>
      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
        Price
      </h3>
      <div className="space-y-2">
        <input
          type="range"
          min="0"
          max="200"
          defaultValue="100"
          className="w-full cursor-pointer"
        />
        <p className="text-gray-700 text-sm">Max. $100.00</p>
      </div>
    </div>
  </div>
</aside>
      {/* Main Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 bg-white shadow">
          {/* Toggle Sidebar Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>


          {/* Header Logo */}
          <div className="text-2xl font-bold text-blue-500">MORENT</div>

          {/* Search Bar */}
          <div className="relative flex items-center w-full mt-4 sm:mt-0 sm:max-w-md">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full px-4 py-2 pl-10 text-sm text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3">
              <Image src="/search-icon.png" alt="Search" width={20} height={20} />
            </div>
            <div className="absolute right-3">
              <Image src="/filter.png" alt="Filter" width={20} height={20} />
            </div>
          </div>

          {/* User Profile */}
          <div className="hidden sm:flex items-center space-x-4">
            <button>
              <Image src="/heart.png" alt="Favorites" width={24} height={24} />
            </button>
            <button className="relative">
              <Image src="/notification-icon.png" alt="Notifications" width={24} height={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851"
                alt="User"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <Car_Details />
      </div>
    </div>
  );
}
