import React, {  useEffect, useState } from 'react'
// import expenseImage from '../../assets/images/Expense.png'

const ExpenseForm = (props) => {
  const [descInput,setDescInput] = useState('');
  const [amountInput,setAmountInput]=useState('');
  const [catInput, setCatInput] = useState('');
  const [button,setButton] = useState('Add Expense');

    useEffect(()=>{
      if(props.expense){
        setAmountInput(props.expense.amount);
        setCatInput(props.expense.cat);
        setDescInput(props.expense.desc);
        setButton('Edit Expense');
        console.log(props.expense)
      }
    },[props.expense])
  

    const addExpenseHandler=(e)=>{
        e.preventDefault();
        const expense = {
            amount:amountInput,
            desc:descInput,
            cat:catInput
        }
        props.expense?props.onEditExpense(props.expense,expense,props.id):props.onAddExpense(expense);
        setAmountInput('');
        setCatInput('');
        setDescInput('');
      }
  return (
    <form >
    <div className="form-outline mb-4">
      <input type="number" id="amount" className="form-control form-control-lg" value={amountInput} onChange={(e)=>setAmountInput(e.target.value)} required  />
      <label className="form-label" htmlFor="amount">Spend Amount</label>
    </div>

    <div className="form-outline mb-4">
      <input type="text" id="desc" className="form-control form-control-lg" value={descInput} onChange={(e)=>setDescInput(e.target.value)} required />
      <label className="form-label" htmlFor="desc">Description</label>
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="cat">Category</label>
    <select id="cat" name="cat" value={catInput} onChange={(e)=>setCatInput(e.target.value)}>
        <option value="Electricity">Electricity</option>
        <option value="Food">Food</option>
        <option value="Fuel">Fuel</option>
        <option value="Salary">Salary</option>
    </select>
    </div>
    <div className="d-flex justify-content-center">
      <button type="button"
        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={addExpenseHandler}>{button}</button>
    </div>
  </form>
      );
  }
export default ExpenseForm