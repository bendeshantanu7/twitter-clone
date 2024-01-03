import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet, FaRegBookmark } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";

interface CardActionOption {
    icon: React.ReactNode;
    reactions: string
}

const reactionMenuItems: CardActionOption[] =[
    {
        icon: <BiMessageRounded />,
        reactions: '75'
    },
    {
        icon: <FaRetweet />,
        reactions: '234'
    },
    {
        icon: <CiHeart />,
        reactions: '3.2K'
    },
    {
        icon: <IoStatsChart />,
        reactions: '200K'
    },
    {
        icon: <FaRegBookmark />,
        reactions: ''
    }
]


const FeedCard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-12 p-5 border-b-[1px] border-[#2f3336]">
        <div className="col-span-1">
          <Image
            src="https://pbs.twimg.com/profile_images/1704765934798602241/SZfO2qnw_400x400.jpg"
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11 pl-3">
          <h5>Ashish Chanchlani</h5>
          <p className="mt-1">
            It ain’t your bland american food devoid of spices and blasted with
            mediocrity that he is gonna spit out. Pray he Doesn’t taste India
            first
          </p>
          <div className="flex justify-between mt-5">
          {reactionMenuItems.map((item: CardActionOption) => {
            return <div className="flex justify-start items-center" key={`react-${item.reactions}`}>
                <span>{item.icon}</span><span className="ml-2">{item.reactions}</span>
            </div>
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
