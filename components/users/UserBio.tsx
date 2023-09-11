import { format } from "date-fns";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";
import Button from "../Button";
import { BiCalendar } from "react-icons/bi";
import useEditModal from "@/hooks/useEditModal";
import useFollow from "@/hooks/useFollow";
import { User } from "@prisma/client";


import Link from "next/link";
import useSubscribe from "@/hooks/useSubscribe";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);
 

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);
  const { isSubscribing, toggleSubscribe } = useSubscribe(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={editModal.onOpen} />
        ) : (
          <div className="flex justify-center items-center md:flex-row flex-col gap-4">
            <Button
              onClick={toggleFollow}
              label={isFollowing ? "Unfollow" : "Follow"}
              secondary={!isFollowing}
              outline={isFollowing}
            />
            <Button
              onClick={toggleSubscribe}
              label={isSubscribing ? "Cancel" : "Subscribe"}
              secondary={!isSubscribing}
              outline={isSubscribing}
            />
          </div>
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-500">@{fetchedUser?.username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{fetchedUser?.bio}</p>
          <div className="flex flex-row items-center gap-2 mt-4 text-neutral-500 ">
            <BiCalendar size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-4">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.followingIds?.length}</p>
            <Link
              href={"/users/following/" + userId}
              className="text-neutral-500"
            >
              Following
            </Link>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{fetchedUser?.followersCount || 0}</p>

            <p className="text-neutral-500">Followers</p>
          </div>
          <div className="flex flex-row items-center gap-1">
          <p className="text-white">{fetchedUser?.subscribersCount || 0}</p>
          <Link
              href={"/users/subscribing/" + userId}
              className="text-neutral-500"
            >
              Subscribers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
