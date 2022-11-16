import React from 'react'

const ExpenseItems = (props) => {
  return (
   
    <li>Amount-{props.expense.amount}$ Category-{props.expense.cat} Description-{props.expense.desc}</li>

    );
}

export default ExpenseItems