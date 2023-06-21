import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./store/Index";

const EditPost = React.lazy(() => import("./pages/EditPost"));
const AddPost = React.lazy(() => import("./pages/AddPost"));
const Details = React.lazy(() => import("./pages/Details"));

const handlePostParams = (data) => {
  if (isNaN(data.params.id)) {
    // throw new Error('please make sure to insert correct post ID');
    throw new Response("Bad Request", {
      statusText: "please make sure to insert correct post ID",
      status: 400,
    });
  }
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback="Loading page :)">
            <AddPost name="raghad" />
          </Suspense>
        ),
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="Loading page :)">
            <EditPost />
          </Suspense>
        ),
        loader: handlePostParams,
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback="Loading page :)">
            <Details />
          </Suspense>
        ),
        loader: handlePostParams,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <RootLayout />
    </RouterProvider>
  </Provider>
);
