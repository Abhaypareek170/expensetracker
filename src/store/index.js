import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/auth";
import expenseSlice from "../store/expenses";
import themeSlice from "../store/theme";

const store = configureStore({
  reducer: {
    auth: authSlice,
    expense: expenseSlice,
    theme: themeSlice,
  },
});

export default store;
