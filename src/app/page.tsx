"use client";
import React, { useCallback } from "react";
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
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "../../clients/api";
import { verifyUserGoogleTokenQuery } from "./graphql/query/user";
import { useCurrentUser } from "./hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
// api key: AIzaSyAZjxzGDqAPgdKLaDAlXkLLSNQL6PSs-LE
// client id: 717564244556-16h3r2htoq67qsv3e385u3s1jp5eltn8.apps.googleusercontent.com

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
  const { user } = useCurrentUser();
  const queryClient = useQueryClient()
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) throw new Error("Token not found");
      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );
      console.log(verifyGoogleToken);
      sessionStorage.setItem("twitter_token", verifyGoogleToken);
      await queryClient.invalidateQueries({queryKey: ['current-user']})
    },
    [queryClient]
  );
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
                <li
                  key={item.title}
                  className="flex flex-row gap-4 justify-start items-center cursor-pointer hover:bg-gray-800 rounded-full p-3 w-fit"
                >
                  <span>{item.icon}</span>
                  <span className="text-xl">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start item-start">
            <button
              type="button"
              className="item-center bg-sky-500 rounded-full p-4"
            >
              Post
            </button>
          </div>
        </div>
        <div className="flex justify-around items-center mt-10">
          <div>
            {user?.profileImageUrl ? <Image src={user?.profileImageUrl} width={50} height={50} className="rounded-full" alt="profile_img"/> : ''}
          </div>
          <div className="flex flex-col">
            <span>{user?.firstName} {user?.lastName}</span>
            <span>@BendeShantanu</span>
          </div>
          <div>
            <FaEllipsisH />
          </div>
        </div>
        <div></div>
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
      <div className="col-span-3">
        {!user ? (
          <GoogleLogin
            onSuccess={handleLoginWithGoogle}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
