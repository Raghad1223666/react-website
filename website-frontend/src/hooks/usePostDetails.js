import { getPost } from "../store/PostsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const usePostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return { post, loading, error };
};

export default usePostDetails;
