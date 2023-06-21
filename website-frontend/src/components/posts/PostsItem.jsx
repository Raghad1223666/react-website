import { Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function PostsItem({ posts, deletePost, isLoggedIn }) {
  const navigate = useNavigate();
  const deleteHandler = (item) => {
    if (
      window.confirm(
        `Are you sure you want to delete this post(${item.title})?`
      )
    ) {
      deletePost(item.id);
    }
  };

  const postsList = posts.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>#{++index}</td>
        <td>
          <Link to={`post/${item.id}`}>{item.title}</Link>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => navigate(`post/${item.id}/edit`)}
              disabled={!isLoggedIn}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteHandler(item)}
              disabled={!isLoggedIn}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return postsList;
}

export default PostsItem;
