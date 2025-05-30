import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  name: string;
  profileImage: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  profileImage,
  bio,
}) => {
  return (
    <div className="max-w-sm mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <Image
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">
        {name}
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-2">{bio}</p>
    </div>
  );
};

export default ProfileCard;
