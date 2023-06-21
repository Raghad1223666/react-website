import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: "333", name: "Raghad Moeed Abu Baker", isLoggedIn: true },
  reducers: {},
});

export default authSlice.reducer;
