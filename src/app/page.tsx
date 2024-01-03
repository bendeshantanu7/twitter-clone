import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";
import { MdMailOutline, MdListAlt } from "react-icons/md";
import { FaRegBookmark, FaEllipsisH } from "react-icons/fa";
import {
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { LuCircleEllipsis } from "react-icons/lu";
import FeedCard from "./components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <IoSearchSharp />,
  },
  {
    title: "Notifications",
    icon: <CiBellOn />,
  },
  {
    title: "Messages",
    icon: <MdMailOutline />,
  },
  {
    title: "Grok",
    icon: <GoHomeFill />,
  },
  {
    title: "Lists",
    icon: <MdListAlt />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Communities",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />,
  },
  {
    title: "More",
    icon: <LuCircleEllipsis />,
  },
];
export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3 pl-24">
        <div className="flex flex-col px-4">
        <div>
          <BsTwitterX className="w-12 h-8" />
        </div>
        <div className="text-2xl">
          <ul>
            {sidebarMenuItems.map((item) => (
              <li className="flex flex-row gap-4 justify-start items-center cursor-pointer hover:bg-gray-800 rounded-full p-3 w-fit">
                <span>{item.icon}</span>
                <span className="text-xl">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-start item-start">
        <button type="button" className="item-center bg-sky-500 rounded-full p-4">Post</button>
        </div>
        </div>
        <div className="flex justify-around items-center mt-10">
          <div>
            <img src="#" className="rounded"  />
          </div>
          <div className="flex flex-col">
              <span>Shantanu Bende</span>
              <span>@BendeShantanu</span>
          </div>
          <div>
          <FaEllipsisH />
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-[#2f3336] mr-10 overflow-auto">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3">Trending</div>
    </div>
  );
}
