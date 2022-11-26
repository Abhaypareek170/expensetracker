import axios from 'axios';
import React from 'react'

const ExpenseItems = (props) => {
  const deleteExpenseHandler = (e)=>{
    e.preventDefault();
    const id = Object.keys(props.keys).find(key => props.keys[key] === props.expense);
    
    axios.delete(`https://expensetracker-b0ad6-default-rtdb.firebaseio.com/expense/${id}.json`)
    .then(()=>console.log("Deleted Successfully"))
    .catch((err)=>console.log(err));
    props.onDelete(props.expense);
    
  }
  const editExpenseHandler = (e)=>{
    e.preventDefault();
    const id = Object.keys(props.keys).find(key => props.keys[key] === props.expense);
    props.onEditExpense(props.expense,id);
    // props.onDelete(props.expense);
  }

  return (
   
    <li>Amount-{props.expense.amount}$ Category-{props.expense.cat} Description-{props.expense.desc} <button type="button" className="btn btn-danger" onClick={deleteExpenseHandler}>Delete</button><button type="button" className="btn btn-secondary" onClick={editExpenseHandler}>Edit</button></li>

    );
}

export default ExpenseItems