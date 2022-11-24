import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
        expenses:[]
    }

const expenseSlice = createSlice({
    name:'expense',
    initialState:initialExpenseState,
    reducers:{
        setExpense(state,action){
            return{
                ...state,
                expenses:[...state.expenses,action.payload]
            }
        },
        addExpense(state,action){
            return{
                ...state,
                expenses:[...state.expenses,action.payload]
            }
        },
        deleteExpense(state,action){
            return{
                ...state,
                expenses:state.expenses.filter((ele)=>ele.desc!==action.payload.desc)
            }

        },
        // editExpense(state,action){
        //     return{
        //         ...state,
        //         expenses:
        //     }
        // }
    }
})

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;