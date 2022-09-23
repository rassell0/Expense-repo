import React, {useState}  from 'react';
import "./expenseForm.css"



 const ExpenseForm = (props) =>{



const [state,setState] = useState({
    title:"",
    amount:"",
    date:"",
   
    
})



const titleChangeHandler = (event) =>{
setState((prevState)=>{
    console.log(state)
    return {
        ...prevState , 
        title: event.target.value
    }
})
}

const amountChangeHandler = (event) =>{
setState((prevState) =>{
    return {
        ...prevState,
        amount: event.target.value
    }
})
}

const dateChangeHandler = (event) =>{
setState((prevState)=>{
    return{
        ...prevState,
        date: event.target.value
    }
})
}

const submitHandler = (event) =>{
event.preventDefault()

const data = {
    title: state.title,
    amount: +state.amount,
    date: new Date(state.date)
}

 props.onData(data) 

setState({
    title:"",
    amount:"",
    date:"", 
   
})



}





return(
<form onSubmit={submitHandler}>
 <div className='new-expense__controls'>
<div className='new-expense__control'>

<label>Title</label>
<input type="text" value={state.title}  onChange={titleChangeHandler} />
</div>
<div className='new-expense__control'>
<label>Amount</label>
<input type= "number" min="0.01" step="0.01" value={state.amount} onChange={amountChangeHandler} />
</div>
<div className='new-expense__control'>
<label>Date</label>
<input type= "date" min="2019-01-01" max="2022-12-31" value={state.date} onChange={dateChangeHandler} />
</div>
    </div>

    <div className='new-expense__actions'>
    
        <button type='button' onClick={props.toggle}>Cancel</button>
        <button> Add Expense</button>
    </div>


</form>
)
}

export default ExpenseForm