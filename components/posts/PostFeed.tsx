import usePosts from '@/hooks/usePosts';
import PostItem from './PostItem';
import usePost from '@/hooks/usePost';
import useCurrentUser from '@/hooks/useCurrentUser';


interface PostFeedProps {
  userId?: string;
  
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);
 

  return (
    <>
      {posts ? posts.map((post: Record<string, any>,) => ( 
        <PostItem postId={post.id} userId={userId} key={post.id} data={post} />)
      ) : []}
    </>
  );
};

export default PostFeed;