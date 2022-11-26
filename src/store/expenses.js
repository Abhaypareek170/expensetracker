import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
        expenses:[],
        amount:0
    }

const expenseSlice = createSlice({
    name:'expense',
    initialState:initialExpenseState,
    reducers:{
        setExpense(state,action){
            const expenses = [...state.expenses,action.payload];
            let amount=Number(0); 
            expenses.forEach((expense)=>amount+=Number(expense.amount));
            return{
                ...state,
                expenses:expenses,
                amount:amount
            }
        },
        addExpense(state,action){
            const expenses = [...state.expenses,action.payload];
            let amount=Number(0); 
            expenses.forEach((expense)=>amount+=Number(expense.amount));
            return{
                ...state,
                expenses:expenses,
                amount:amount
            }
        },
        deleteExpense(state,action){
            const expenses = state.expenses.filter((ele)=>ele.desc!==action.payload.desc)
            let amount=Number(0); 
            expenses.forEach((expense)=>amount+=Number(expense.amount));
            return{
                ...state,
                expenses:expenses,
                amount:amount
            }

        },
        editExpense(state,action){
            const expenses = action.payload;
            let amount=Number(0); 
            expenses.forEach((expense)=>amount+=Number(expense.amount));
            return{
                ...state,
                expenses:expenses,
                amount:amount
            }
        }
    }
})

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;