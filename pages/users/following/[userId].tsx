import FollowingList from "@/components/FollowingList";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;
  

  return (
    <>
      <Header showBackArrow label="Following" />
     <FollowingList userId={userId as string}></FollowingList>
      
    </>
  );
};

export default UserView;
