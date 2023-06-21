import { configureStore } from "@reduxjs/toolkit";
import posts from "./PostsSlice";
import auth from './AuthSlice';

const store = configureStore({ reducer: { posts, auth } });
export default store;
