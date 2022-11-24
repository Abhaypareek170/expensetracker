import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../store/auth';
import expenseSlice from '../store/expenses';

const store = configureStore({
    reducer:{
        auth: authSlice,expense: expenseSlice
    }
})

export default store;