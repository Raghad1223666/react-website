import { Table } from "react-bootstrap";
import PostsItem from "./PostsItem";
import { memo } from "react";

function PostsList({ posts, loading, error, deletePost, isLoggedIn }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostsItem posts={posts} loading={loading} error={error} deletePost={deletePost} isLoggedIn={isLoggedIn} />
      </tbody>
    </Table>
  );
}

export default memo(PostsList);
