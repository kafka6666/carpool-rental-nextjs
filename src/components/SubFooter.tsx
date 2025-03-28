import React from "react";
import { IoMdContacts } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import Image from "next/image";

const SubFooter = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-[0_2px_15px_-3px-rgba(0,0,0,0.07),0_10px_20px_-2px-rgba(0,0,0,0.04)] md:flex-row relative">
      <Image
        src="/lower-banner.jpg"
        alt=""
        width={1000}
        height={1000}
        className="h-96 w-full rounded-t-lg rounded-b-lg object-cover md:h-[60vh] lg:h-[80vh]"
      />
      <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8">
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <MdCardTravel className="text-orange-500" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-orange-500 font-bold">Office</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Seeking Office Transportation Services? Contact Us to Customize
              Your monotonous Working Day!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <IoCarSport className="text-orange-500" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-orange-500 font-bold">Our fleet</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Discover the Perfect Ride for Any Event - What’s Your Selection?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <IoMdContacts className="text-orange-500" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-orange-500 font-bold">About Us</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Discover Unmatched Luxury Travel with CarPool in Dhaka’s
              Finest Experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;