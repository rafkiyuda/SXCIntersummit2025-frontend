import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const UserEventsPage = () => {
  const [filter, setFilter] = useState<"all" | "BMC">("all");
  return (
    <div className="mx-auto px-6  py-6">
      {" "}
      <div className="text-left mb-4 flex justify-between items-center ">
        <h2 className="text-white text-[25px] font-bold my-5">My Events</h2>{" "}
        {/* Filter Dropdown */}
        <Select
          value={filter}
          onValueChange={(value) => setFilter(value as "all" | "BMC")}
        >
          <SelectTrigger className=" cursor-pointer text-black font-bold bg-[#D9D9D9]">
            <SelectValue placeholder="Select Events" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Events</SelectLabel>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="BMC">BMC Events</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="container mx-auto p-4 bg-[#8257A9] rounded-3xl">
          <img
            src="/images/homepage/placeholder.png"
            className="w-full max-h-[300px] bg-cover "
            alt=""
          />

          <div className="mt-4">
            <p className="text-3xl font-bold">Event A</p>
            <p className="text-md opacity-70">Status Event: O/U/E</p>
            <p className="text-md opacity-70">Periode Event</p>
            <p className="text-md opacity-70 my-3">Lorem Ipsum</p>
            <button className="font-bold text-white bg-[#5EC7ED] cursor-pointer rounded-lg py-4 px-8 mt-4 hover:bg-[#6f4c8f] transition duration-200">
              View Details
            </button>
          </div>
        </div>
        <div className="container mx-auto p-4 bg-[#8257A9] rounded-3xl">
          <img
            src="/images/homepage/placeholder.png"
            className="w-full max-h-[300px] bg-cover "
            alt=""
          />

          <div className="mt-4">
            <p className="text-3xl font-bold">Event A</p>
            <p className="text-md opacity-70">Status Event: O/U/E</p>
            <p className="text-md opacity-70">Periode Event</p>
            <p className="text-md opacity-70 my-3">Lorem Ipsum</p>
            <button className="font-bold text-white bg-[#5EC7ED] cursor-pointer rounded-lg py-4 px-8 mt-4 hover:bg-[#6f4c8f] transition duration-200">
              View Details
            </button>
          </div>
        </div>
        <div className="container mx-auto p-4 bg-[#8257A9] rounded-3xl">
          <img
            src="/images/homepage/placeholder.png"
            className="w-full max-h-[300px] bg-cover "
            alt=""
          />

          <div className="mt-4">
            <p className="text-3xl font-bold">Event A</p>
            <p className="text-md opacity-70">Status Event: O/U/E</p>
            <p className="text-md opacity-70">Periode Event</p>
            <p className="text-md opacity-70 my-3">Lorem Ipsum</p>
            <button className="font-bold text-white bg-[#5EC7ED] cursor-pointer rounded-lg py-4 px-8 mt-4 hover:bg-[#6f4c8f] transition duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEventsPage;
