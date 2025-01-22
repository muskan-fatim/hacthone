'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "./../../sanity/lib/client";
import { usePathname } from "next/navigation";
import { Cards } from "./hero";
import { NotificationProvider } from "../context/NotificationContext";

const fetchCarDetails = async (id: string) => {
  return await client.fetch(`*[_type=="car" && _id == $id][0]{
     transmission,
    name,
    "image":image.asset->url,
    type,
    pricePerDay,
    fuelCapacity,
    seatingCapacity,
    tags,
    _id,
    price
    }

    `, { id });
};
function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-75"></div>
        <p className="mt-4 text-lg text-blue-600 font-semibold">Loading, please wait...</p>
      </div>
    </div>
  );}

export default function CarDetails() {
  const pathname = usePathname();
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    // Extract the ID from the pathname
    const id = pathname.split('/').pop();
    if (id) {
      fetchCarDetails(id).then(setCar);
    }
  }, [pathname]);

  if (!car) {
    return <p><Loader/></p>;
  }


  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-left px-4 sm:px-8 lg:px-16">
<div className='md:flex space-x-7'>
<div className="bg-white text-black p-10 rounded-lg shadow-md mt-7 ">
  <h2 className="   text-4xl font-bold mb-4">Sports car with the best design
    <br></br> and acceleration</h2>
  <p className=" mb-6  ">Safety and comfort while 
    driving a futuristic and elegant sports car</p>
  <div className="relative w-full max-w-lg mx-auto">
    <Image
      src={car.image}
      alt={car.name}
      height={300}
      width={500}
      className="w-full object-contain"
    />
  </div>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-6">Rent Now</button>
</div>

      {/* Card Section */}
  <div className="max-w-sm w-full rounded-xl border border-gray-200 shadow-lg p-6 bg-white mt-8 aria- hidden md:block">
    {/* Header */}
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>
      <div className="text-red-500 text-2xl">❤️</div>
    </div>

    {/* Rating */}
    <div className="flex items-center gap-2 mb-4">
      <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐☆</div>
      <p className="text-gray-500 text-sm">440+ Reviewer</p>
    </div>

    {/* Description */}
    <p className="text-gray-600 mb-4">
      {car.name} has become the embodiment of {car.name}o utstanding performance,
      inspired by the most unforgiving proving ground, the "{car.type} track".
    </p>

    {/* Car Info */}
    <div className="grid grid-cols-2 gap-y-2 mb-5 text-gray-500">
      <p>
        <span className="font-semibold text-gray-900">Type Car: </span> {car.type}
      </p>
      <p>
        <span className="font-semibold text-gray-900">Capacity: </span> {car.seatingCapacity}
      </p>
      <p>
        <span className="font-semibold text-gray-900">Steering: </span> {car.transmission}
      </p>
      <p>
        <span className="font-semibold text-gray-900">Gasoline: </span> {car.fuelCapacity}
      </p>
      <div className="flex justify-between items-center">
      <div>
        <p className="text-xl font-bold text-gray-900">
          {car.pricePerDay} <span className="text-sm font-normal text-gray-500">/ days</span>
        </p>
        <p className="text-gray-400 line-through">{car.price}</p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        Rent Now
      </button>
    </div>
  </div>
    </div>
      </div>
      <NotificationProvider>
      <Cards />
      </NotificationProvider>
      </div>

      </div>
  );
}
