import PostsList from "../components/posts/PostsList";
import { getPosts } from "../store/PostsSlice";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/posts/Loading";
import { deletePost } from "../store/PostsSlice";


const Index = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deleteItem = useCallback((id) => dispatch(deletePost(id)), [dispatch]);

  return (
    <Loading loading={loading} error={error}>
      <PostsList posts={posts} deletePost={deleteItem} isLoggedIn={isLoggedIn} />
    </Loading>
  );
};

export default Index;
