import usePosts from '@/hooks/usePosts';
import PostItem from './PostItem';
import usePost from '@/hooks/usePost';
import useCurrentUser from '@/hooks/useCurrentUser';


interface PostFeedProps {
  userId?: string;
  postId: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, postId }) => {
  const { data: posts = [] } = usePosts(userId);
  const { data: currentUser } = useCurrentUser();

  return (
    <>
      {posts ? posts.map((post: Record<string, any>,) => (

        ((post.userId === currentUser.id ||
        post.typeId  ===  "0" )? 
        <PostItem postId={postId} userId={userId} key={post.id} data={post} />:<p></p>)
      )) : []}
    </>
  );
};

export default PostFeed;