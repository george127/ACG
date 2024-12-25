import { createSlice } from "@reduxjs/toolkit";

// Retrieve stored user and authentication status from localStorage (if any)
const storedUser = localStorage.getItem("user");
const storedAuthStatus = localStorage.getItem("isAuthenticated");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: storedAuthStatus === "true", // Parse the stored authentication status
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      // Store user and authentication status in localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      // Remove user data and authentication status from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
