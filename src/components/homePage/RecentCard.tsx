import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export type RecentCardProps = {
  imageLink: string;
  title: string;
  description: string;
  linkTo: string;
  locked: boolean;
  category: string[];
};

const RecentCard = ({
  imageLink,
  title,
  description,
  linkTo,
  locked,
  category,
}: RecentCardProps) => {
  return (
    <Link to={linkTo} className="flex justify-center items-center">
      <div className="bg-[#3c1360] p-5 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8257A9]/40 w-[340px] min-h-[380px] flex flex-col items-center mx-auto">
        <img
          src={imageLink}
          className="rounded-md w-full h-[160px] object-cover"
          alt=""
        />

        <div className="flex justify-center items-center mt-3 w-full min-h-[48px]">
          <p className="bg-[#0E051B] px-3 py-1 rounded-md w-fit text-base text-center break-words">
            {title}
          </p>
        </div>

        <p className="text-purple-200 mt-3 text-sm text-center line-clamp-2 min-h-[40px]">
          {description}
        </p>
        <div className="flex-grow" />
        <p className="text-purple-500 gap-2 flex items-center text-sm mt-2 justify-center">
          Read More <ChevronRight size={18} />
        </p>
      </div>
    </Link>
  );
};

export default RecentCard;
