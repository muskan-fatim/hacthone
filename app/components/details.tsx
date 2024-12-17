'use client'
import { HeartIcon, UserGroupIcon, BeakerIcon, CogIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import Image from 'next/image';
import SNavbar from '../components/othernav';
export default function Car_Details() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-8 lg:px-16">
<div className='md:flex space-x-7'>
  <Image
    src={"/car.png"}
    alt="Nissan GT-R"
    height={450}
    width={542}
    className="w-full max-w-lg mt-7 object-contain"
  />

  {/* Card Section */}
  <div className="max-w-sm w-full rounded-xl border border-gray-200 shadow-lg p-6 bg-white mt-8 aria- hidden md:block">
    {/* Header */}
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-2xl font-bold text-gray-900">Nissan GT – R</h2>
      <div className="text-red-500 text-2xl">❤️</div>
    </div>

    {/* Rating */}
    <div className="flex items-center gap-2 mb-4">
      <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐☆</div>
      <p className="text-gray-500 text-sm">440+ Reviewer</p>
    </div>

    {/* Description */}
    <p className="text-gray-600 mb-4">
      NISMO has become the embodiment of Nissan's outstanding performance,
      inspired by the most unforgiving proving ground, the "race track".
    </p>

    {/* Car Info */}
    <div className="grid grid-cols-2 gap-y-2 mb-5 text-gray-500">
      <p>
        <span className="font-semibold text-gray-900">Type Car: </span> Sport
      </p>
      <p>
        <span className="font-semibold text-gray-900">Capacity: </span> 2 Person
      </p>
      <p>
        <span className="font-semibold text-gray-900">Steering: </span> Manual
      </p>
      <p>
        <span className="font-semibold text-gray-900">Gasoline: </span> 70L
      </p>
      <div className="flex justify-between items-center">
      <div>
        <p className="text-xl font-bold text-gray-900">
          $80.00 <span className="text-sm font-normal text-gray-500">/ days</span>
        </p>
        <p className="text-gray-400 line-through">$100.00</p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        Rent Now
      </button>
    </div>
  </div>
    </div>
    </div>

    {/* Price Section */}
   

  {/* Responsive Image Section */}
  <div className="flex flex-wrap gap-6 mt-8">
    <Image
      src={"/c1.png"}
      alt="Car Image 1"
      height={124}
      width={140}
      className="rounded-md object-cover h-32 w-32"
    />
    <Image
      src={
        "https://s3-alpha-sig.figma.com/img/2a70/cf86/a73f1fdfda8a78629de1874016c972fe?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7fkHyvtApAEKXFWfTYUxRF~BprEc5Q5JINvIkmbfBa4GSCyQP9EHuGaCN~M7jr~HNaEGc9Nv23T20GvkJ4MEiM31b6PTaLSJS~mGx1C5jvEyfTAY6tsk-xJGqEIepdHaH9Z~coyS-fUCVt1dZNlO500fHlojzNVDAGedZEyuU98-fVIt9lW~5J3XQrj--2AelIAyVhVsA2dH76xhfMcM9AC9whGPKJ3~2fJYJTW1ZFSl0Ps1go62VFA9MHrxycIpU9ykXNJxZ8dujbNpgQoz4Ed1Wg09E769GXiRbbCNA6hWc~cOAwxeksP3fRwqaAAMbbOTQ-wbMHiE2xj5~W5yA__"
      }
      alt="Car Image 2"
      height={50}
      width={120}
      className="rounded-md object-cover h-32 w-32"
    />
    <Image
      src={
        "https://s3-alpha-sig.figma.com/img/b79c/e842/46da5a33b100b5e944d576a984fba3e1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WI6kIwzpryjvdmX2Rr-rjRLLf~JWNqiKvIX85OcwJqcYOFPhLbC2vW8lqyniv94CExSdeoFIPEfS~Okwas6v-RVoQ6~NmhBm-TU03WgtqR5XaQYTE5SEC8v2NvrcRVZ~wgA4Tkd6qhvoN16iJIhdDJ4RTtDwtapPOSAzDX9WeMAHIUt0YE5q0r2gcW5YJ6tgPqAa1gYsAk5R5cKOLOgNYl26hlTK21~gWYyY67GeqiaPgKsmoGeBe~hdDX9fURjRZXyEQRuupK5hPALWdRyK~FTYWsxc6Sx4~prnn~mVNgf3a1fufOaeuI92EiT3ynUjiOTENIyRXdmuZH-PNp4-PQ__"
      }
      alt="Car Image 3"
      height={50}
      width={120}
      className="rounded-md object-cover h-32 w-32"
    />
  </div>

        <Image src={"/image.png"} alt='' height={900} width={1000} 
        className='top-32 mt-7' />

      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-auto max-w-xl m-4 lg:m-10">
          <form className="flex flex-wrap gap-4">
            {/* Pickup Radio Button */}  
            <div className="flex items-center">
              <label className="text-lg font-semibold">
                Pickup
                <input type="radio" name="carType" value="SUV" className="ml-2" />
              </label>
            </div>

            {/* Location Dropdown */}
            <div className="flex items-center">
              <label htmlFor="location" className="text-lg font-semibold">
                Location:
              </label>
              <select
                id="location"
                name="location"
                className="block w-full sm:w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="NewYork">New York</option>
                <option value="LosAngeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Miami">Miami</option>
                <option value="SanFrancisco">San Francisco</option>
              </select>
            </div>

            {/* Date Dropdown */}
            <div className="flex items-center">
              <label htmlFor="date" className="text-lg font-semibold">
                Date:
              </label>
              <select
                id="date"
                name="date"
                className="block w-full sm:w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="2024-12-10">Dec 10, 2024</option>
                <option value="2024-12-11">Dec 11, 2024</option>
                <option value="2024-12-12">Dec 12, 2024</option>
                <option value="2024-12-13">Dec 13, 2024</option>
              </select>
            </div>
            {/* Time Dropdown */}
            <div className="flex items-center">
              <label htmlFor="time" className="text-lg font-semibold">
                Time:
              </label>
              <select
                id="time"
                name="time"
                className="block w-full sm:w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="10:00AM">10:00 AM</option>
                <option value="11:00AM">11:00 AM</option>
                <option value="12:00PM">12:00 PM</option>
                <option value="01:00PM">01:00 PM</option>
                <option value="02:00PM">02:00 PM</option>
                <option value="03:00PM">03:00 PM</option>
                <option value="04:00PM">04:00 PM</option>
              </select>
            </div>
          </form>
        </div>

        {/* Button */}
        <button className="bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-4">
          ↑↓
        </button>
        {/* Right Form */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-auto max-w-xl m-4 lg:m-10">
          <form className="flex flex-wrap gap-4">
            {/* Drop Down Radio Button */}
            <div className="flex items-center">
              <label className="text-lg font-semibold">
                Drop Down
                <input type="radio" name="carType" value="SUV" className="ml-2" />
              </label>
            </div>
            {/* Location Dropdown */}
            <div className="flex items-center">
              <label htmlFor="location" className="text-lg font-semibold">
                Location:
              </label>
              <select
                id="location"
                name="location"
                className="block w-full sm:w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="NewYork">New York</option>
                <option value="LosAngeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Miami">Miami</option>
                <option value="SanFrancisco">San Francisco</option>
              </select>
            </div>

            {/* Date Dropdown */}
            <div className="flex items-center">
              <label htmlFor="date" className="text-lg font-semibold">
                Date:
              </label>
              <select
                id="date"
                name="date"
                className="block w-full sm:w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="2024-12-10">Dec 10, 2024</option>
                <option value="2024-12-11">Dec 11, 2024</option>
                <option value="2024-12-12">Dec 12, 2024</option>
                <option value="2024-12-13">Dec 13, 2024</option>
              </select>
            </div>

            {/* Time Dropdown */}
            <div className="flex items-center">
              <label htmlFor="time" className="text-lg font-semibold">
                Time:
              </label>
              <select
                id="time"
                name="time"
                className="block w-full sm:w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="10:00AM">10:00 AM</option>
                <option value="11:00AM">11:00 AM</option>
                <option value="12:00PM">12:00 PM</option>
                <option value="01:00PM">01:00 PM</option>
                <option value="02:00PM">02:00 PM</option>
                <option value="03:00PM">03:00 PM</option>
                <option value="04:00PM">04:00 PM</option>
              </select>
            </div>
          </form>
        </div>
      </div>


      {/* Popular Cars Section */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold mb-6">Popular Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Koenigsegg',
              people: '2',
              transmission: 'Mannual',
              fuel: '90L',
              price: '$99.00',
              image:
                'https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od1UBAJf7E5O46664edEbxigGSpM3-JsBv04704PcK-9d~RrvEs6ppQdIFAuV5SO7DK4KdIOedl7rLfh~ZdB8p2H010WWUIxpXiNh9sQzC8FF~k9lq2soe-51CJOCWNOQ9uBXLpaV2LlgrPiSwu1sOYI0xh~8DBSlQU2flfi~ymjFBtsgzmBfOZ~JLvE2WnajtJi5we3G6HDB9TGun3wd~4ItGLCzi-d13QfTCKEnDG8TSJFZPpuhqdW7969joySadH-urF54-xyCZb73147LVY6vp7yqYicDPozXo-d2EmYfXV9MsNGO99O7z6K3K9ay3ZXZ4wiPTFv3OpE5E4otw__',
            },
            {
              name: 'Nissan GT-R',
              people: '2',
              transmission: 'Mannual',
              fuel: '90L',
              price: '$80.00',
              image:
                'https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__',
            },
            {
              name: 'Rolls Royce',
              people: '4',
              transmission: 'Mannual',
              fuel: '90L',
              price: '$96.00',
              image:
                'https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4kWQF-RwLWQA4ZCB1mZjfVcn2qRUO2VP84Jx~2F2jaCKQpL1pCshHjbZ~Fx2s4ysHB9ldzzLqcrdqRmarAVvy9gSpSgRiXYZdRiFCo-0ZPbyMP6KsGMXlup6InpNBYsV8aLL-snTW-9YtBwQ5Qm61bW6ZpzjFF0azAQyEfczvZiilEwT2dlZeRpwZzY6dwZJRPY1bWd~v4SE0xl-sodJJnyPgms4P7UMeg2vGNT32shp09ieuU6hlGZ1V2Uy1RYg0cA~nspeUFsi-w9FO7gf2G9rsi0jaZFbuOhgS8Q4ho7xAv0C5meMBKGRsNg7F8TWK7IjjtplzkhDSC9yVlBdQ__',
            },
            {
              name: 'Nissan GT - R',
              people: '2',
              transmission: 'Mannual',
              fuel: '90L',
              price: '$72.00',
              image:
                'https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__',
            },
          ].map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold mt-4">{car.name}</h3>
                <HeartIcon className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-gray-400">suv</p>
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div className='flex'>

                <span className="text-black">{car.price}</span>
                <p className=" text-gray-400 font-semibold">
                  /day
                </p>
              </div>

              <div className="mt-2 flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <BeakerIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{car.fuel}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <UserGroupIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{car.people}</span>
                </div>
              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Recommended Cars Section */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: 'CR-V', price: '$72.00', people: "6", transmission: "Mannual", fuel: "70L", image: 'https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXI~y-OWux0iMmwYjmoICYaSXVL71lkyD7nURbHJCj4h2kzxNRW7DpPWt7uJX1F~WxFbJrNinS-4wNiPWCR4CjoTW45MJRxUogsN4bLAD3UzBL9UkFtfZXD3L8ePGAfeV6MJjSPNBfbAKfqqsYmTnfV1x8CwrSDFnMCySQCF~wK7Dx~o~bsSM7A2umc-OhMOg1-h0~-9~pz9c9xKe6HKKCH5ZIV1TTFEdqTAh~wZFTDPMvdGkRo05wS52LYwjSkW2JyflJoRyQd9I-QU~vmykzPdOVUbn4tw73rXN06bUseoXrYI~T61BDFlehSkBLCL8OvHbnsWAGLCCzfgUTfzhg__' },
            { name: 'All New Rush', people: "6", transmission: "Mannual", fuel: "80L", price: '$80.00', image: 'https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iEtd1L31~SDARUmAQn-fQkL~Oc002f42558hDobFA6RJWgLxTIoGX46soH3MXqjkKUZk96~MLUOQUo2X~Khc0~ybcLZ5m8WYhxLFd3CP11vPe0eWkGPUEOxLmeoN39GWHRjs6WH8GFIYSdL9wtR3kNcFkB8Lv2HRApChp7ZSd0y83ETIbvpCVjNNWy6981~g-cDsDR9KW712eoFqhBi3z4d~Y-pA8IVe6WnnKH00y-fWR-cvKPfKkuAmRuN1vSeJZYp7v5xM6Ift8PudJhkAkCz14qIdAvteQHpxZAscw4mhO-RQaD~O~fNZXWfBZZ8eiLgcqqOVtsetmD7bklwWZg__' },
            { name: 'All New Terios', people: "6", transmission: "Mannual", fuel: "90L", price: '$74.00', image: 'https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXI~y-OWux0iMmwYjmoICYaSXVL71lkyD7nURbHJCj4h2kzxNRW7DpPWt7uJX1F~WxFbJrNinS-4wNiPWCR4CjoTW45MJRxUogsN4bLAD3UzBL9UkFtfZXD3L8ePGAfeV6MJjSPNBfbAKfqqsYmTnfV1x8CwrSDFnMCySQCF~wK7Dx~o~bsSM7A2umc-OhMOg1-h0~-9~pz9c9xKe6HKKCH5ZIV1TTFEdqTAh~wZFTDPMvdGkRo05wS52LYwjSkW2JyflJoRyQd9I-QU~vmykzPdOVUbn4tw73rXN06bUseoXrYI~T61BDFlehSkBLCL8OvHbnsWAGLCCzfgUTfzhg__' },
            { name: 'CR-V', price: '$72.00', people: "6", transmission: "Mannual", fuel: "80L", image: 'https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXI~y-OWux0iMmwYjmoICYaSXVL71lkyD7nURbHJCj4h2kzxNRW7DpPWt7uJX1F~WxFbJrNinS-4wNiPWCR4CjoTW45MJRxUogsN4bLAD3UzBL9UkFtfZXD3L8ePGAfeV6MJjSPNBfbAKfqqsYmTnfV1x8CwrSDFnMCySQCF~wK7Dx~o~bsSM7A2umc-OhMOg1-h0~-9~pz9c9xKe6HKKCH5ZIV1TTFEdqTAh~wZFTDPMvdGkRo05wS52LYwjSkW2JyflJoRyQd9I-QU~vmykzPdOVUbn4tw73rXN06bUseoXrYI~T61BDFlehSkBLCL8OvHbnsWAGLCCzfgUTfzhg__' },
            { name: 'MG ZX Exclusice', price: '$74.00', people: "4", transmission: "Mannual", fuel: "70L", image: "https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7EDP2iI2JRxApdPbaypXIG5OQzVYD~fCkN-TRuq32-vQrw-xk~ZEVP4EHSqgBVSHEeZZuttX5G5i090eqieFQdv0xob8AOmii5Gzz3SIu-agfjYbgeFWwF0ksKyjb3dHHf-KSBXaUpw9UMF9pLYcV0f3djEGevz07kZ5lGc21kurKIJWySoxYAb22MadcU1Xdu6QIMWAFQg74s5SVdSZc-6SV2WZ5LEoh~LucqedCN6uQ5E4TthcoFSDHHwpF6cfnirjDMIfu8cwETL9GHDJNqXvRC7AjzqW1KLEcMETA~0vP-3L~~hJiFEK7QlA9DHr-ACOEg8D3ZGNxetFuVgwg__" },
            { name: 'New MG ZS', price: '$86.00', people: "6", transmission: "Mannual", fuel: "80L", image: "https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONSxK~-zlR4PcE8E~-IaMgarN17IyBVcgBDMWBKXTnTloQY2xWBXJc9s3zlf8TZfjZiWF7mzUE2DGaaHIYTJyMDZIPV6-TVyE-qziZIq~xfl1CO53WULROdCUN7-hiTcCmdWggbPHwG3Qg1VzwE3fzpRHif9W3bQKzu2SmdrOMEhdfw0Hys5hEwXVMPtUaJ9tw2HQYrJCamUGYunePqARfl2gIwNthFN2hzLNjQg1pia3eNU5WoebNNeZ209k1puQH~xOPzsA5o9UPVGH2Wq89eIUPjvSKy6I6BPzSQH-Wyu43uvUdHCvhHKq8VBvzVbTejJWbOrbXbZv7ZTKN77Ow__" },
            { name: 'MG ZX Exclusice', price: '$74.00', people: "4", transmission: "Mannual", fuel: "70L", image: "https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7EDP2iI2JRxApdPbaypXIG5OQzVYD~fCkN-TRuq32-vQrw-xk~ZEVP4EHSqgBVSHEeZZuttX5G5i090eqieFQdv0xob8AOmii5Gzz3SIu-agfjYbgeFWwF0ksKyjb3dHHf-KSBXaUpw9UMF9pLYcV0f3djEGevz07kZ5lGc21kurKIJWySoxYAb22MadcU1Xdu6QIMWAFQg74s5SVdSZc-6SV2WZ5LEoh~LucqedCN6uQ5E4TthcoFSDHHwpF6cfnirjDMIfu8cwETL9GHDJNqXvRC7AjzqW1KLEcMETA~0vP-3L~~hJiFEK7QlA9DHr-ACOEg8D3ZGNxetFuVgwg__" },
            { name: 'New MG ZS', price: '$86.00', people: "6", transmission: "Mannual", fuel: "80L", image: "https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONSxK~-zlR4PcE8E~-IaMgarN17IyBVcgBDMWBKXTnTloQY2xWBXJc9s3zlf8TZfjZiWF7mzUE2DGaaHIYTJyMDZIPV6-TVyE-qziZIq~xfl1CO53WULROdCUN7-hiTcCmdWggbPHwG3Qg1VzwE3fzpRHif9W3bQKzu2SmdrOMEhdfw0Hys5hEwXVMPtUaJ9tw2HQYrJCamUGYunePqARfl2gIwNthFN2hzLNjQg1pia3eNU5WoebNNeZ209k1puQH~xOPzsA5o9UPVGH2Wq89eIUPjvSKy6I6BPzSQH-Wyu43uvUdHCvhHKq8VBvzVbTejJWbOrbXbZv7ZTKN77Ow__" },
          ].map((car, index) => (
            <div key={index} className="bg-white f rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-start">


                <h3 className="text-lg font-bold mt-4">{car.name}</h3>
                <HeartIcon className="h-5 w-5 text-gray-400" />

              </div>
              <p className='text-gray-400'>suv</p>
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div className='flex'>

                <span className="text-black">{car.price}</span>
                <p className=" text-gray-400 font-semibold">
                  /day
                </p>
              </div>
              <div className="mt-2 flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <BeakerIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{car.fuel}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <UserGroupIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{car.people}</span>
                </div>

              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </section>
</div>
  );
}