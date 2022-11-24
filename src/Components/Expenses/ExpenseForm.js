import React, { useEffect, useRef, useState } from 'react'
// import expenseImage from '../../assets/images/Expense.png'

const ExpenseForm = (props) => {
  const [descInput,setDescInput] = useState('');
  const [amountInput,setAmountInput]=useState('');
  const [catInput, setCatInput] = useState('');

   useEffect(()=>{
    if(props.expense){
      setAmountInput(props.expense.amount);
      setCatInput(props.expense.cat);
      setDescInput(props.expense.desc);
    }
   },[props.expense])
    const amountInputRef = useRef();
    const descInputRef = useRef();
    const catInputRef = useRef();

    const addExpenseHandler=(e)=>{
        e.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredDesc = descInputRef.current.value;
        const enteredCat = catInputRef.current.value;

        const expense = {
            amount:enteredAmount,
            desc:enteredDesc,
            cat:enteredCat
        }
        props.expense?props.onEditExpense(props.expense,expense,props.id):props.onAddExpense(expense);
    }
  return (
    <form >
    <div className="form-outline mb-4">
      <input type="number" id="amount" className="form-control form-control-lg" defaultValue={amountInput} ref={amountInputRef} required  />
      <label className="form-label" htmlFor="amount">Spend Amount</label>
    </div>

    <div className="form-outline mb-4">
      <input type="text" id="desc" className="form-control form-control-lg" defaultValue={descInput} ref={descInputRef} required />
      <label className="form-label" htmlFor="desc">Description</label>
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="desc">Category</label>
    <select id="cat" name="cat" ref={catInputRef}  defaultValue={catInput}>
        <option value="Electricity">Electricity</option>
        <option value="Food">Food</option>
        <option value="Fuel">Fuel</option>
        <option value="Salary">Salary</option>
    </select>
    </div>
    <div className="d-flex justify-content-center">
      <button type="button"
        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={addExpenseHandler}>Add Expense</button>
    </div>
  </form>
      );
  }
export default ExpenseForm