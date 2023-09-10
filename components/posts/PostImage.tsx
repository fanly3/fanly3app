import Image from "next/image";
import useUser from "@/hooks/useUser";
import Avatar from "../Avatar";
import usePost from "@/hooks/usePost";

interface PostImageProps {
  postId: string;
}

const PostImage: React.FC<PostImageProps> = ({ postId }) => {
  const { data: fetchedPost } = usePost(postId);
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedPost?.image && (
          <Image
            src={fetchedPost.image}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          ></Image>
        )}
        
      </div>
    </div>
  );
};

export default PostImage;
