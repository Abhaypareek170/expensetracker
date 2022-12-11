import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const initialAuthState = {
  isAuthenticated: !!token,
  token: token,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
