import { useEffect } from "react";
import usePostDetails from "../hooks/usePostDetails";
import { useDispatch } from "react-redux";
import { editPost } from "../store/PostsSlice";
import { useNavigate } from "react-router-dom";
import WithGuard from '../utils/WithGuard';
import { useFormik } from "formik";
import { validationSchema } from "../utils/ValidationSchema";
import Loading from "../components/posts/Loading";
import { Form, Button } from "react-bootstrap";
import { clearPost } from "../store/PostsSlice";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, post } = usePostDetails();

  useEffect(() => {
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: post ? post?.title : "",
      description: post ? post?.description : "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        editPost({
          id: post.id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap()
        .then(() => navigate("/"));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          isInvalid={!!formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          isInvalid={!!formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default WithGuard(EditPost);