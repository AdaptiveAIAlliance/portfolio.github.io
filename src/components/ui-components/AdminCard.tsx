import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface AdminCardProps {
  name: string;
  role: string;
  email: string;
  profileImage: string;
}

const AdminCard: React.FC<AdminCardProps> = ({
  name,
  role,
  email,
  profileImage,
}) => {
  return (
    <div className="max-w-sm w-fit mx-auto p-6 rounded-lg shadow-lg bg-gradient-to-r from-slate-600/40 to-neutral-600/40 hover:from-slate-200/40 hover:to-neutral-200/40 dark:from-emerald-600/40 dark:to-lime-600/40 dark:hover:from-emerald-200/40 dark:hover:to-lime-200/40 hover:bg-opacity-40 duration-300 hover:shadow-xl hover:dark:shadow-emerald-200/40 hover:shadow-slate-200/40 transition-all transform hover:scale-105">
      <div className="relative">
        <Image
          src={profileImage}
          alt={`${name}'s profile`}
          width={96}
          height={96}
          className="w-fit h-24 rounded-full mx-auto mb-4 border-4 border-slate-500/40 dark:border-emerald-500/40 shadow-md"
        />
        <div className="absolute top-0 right-0 bg-slate-800 dark:bg-emerald-800 text-white text-xs px-2 py-1 rounded-full shadow-md">
          Admin
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-emerald-100">
        {name}
      </h3>
      <p className="text-center text-gray-800 dark:text-emerald-200 mt-2 ">
        {role}
      </p>
      <p className="text-center text-gray-800 dark:text-emerald-200 mt-1">
        {email}
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <Button className="px-4 py-2 bg-slate-900 hover:bg-slate-700 dark:bg-emerald-900 text-white rounded-lg shadow hover:dark:bg-emerald-700 transition">
          Message
        </Button>
        <Button className="px-4 py-2 bg-neutral-900 hover:bg-neutral-700 dark:bg-lime-900 text-white rounded-lg shadow hoverdark:bg-lime-400/20 transition">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default AdminCard;
