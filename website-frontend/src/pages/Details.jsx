import Loading from "../components/posts/Loading";
import usePostDetails from "../hooks/usePostDetails";
import { Fragment } from "react";

const Details = () => {
  const { post, error, loading } = usePostDetails();

  return (
    <Fragment>
      <Loading loading={loading} error={error}>
        <p>Title: {post?.title} </p>
        <p>Description: {post?.description}</p>
      </Loading>
    </Fragment>
  );
};

export default Details;
