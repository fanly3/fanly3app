const PostType = () => {
  return (
    <select name="Visiblity" id="vis" className="rounded-xl px-2 py-1 text-xs text-neutral-300 bg-neutral-600">
      <option value="Everyone">Everyone</option>
      <option value="Follower">Followers</option>
      <option value="Subscribers">Subscribers</option>
      <option value="Registered">Registered</option>
    </select>
  );
};

export default PostType;