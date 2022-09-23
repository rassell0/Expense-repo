import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import "./newExpense.css"

const NewExpense = (props) =>{

const [toggleRender, setToggleRender] = useState(false)


const getData = (receivedData) =>{
const data ={
    ...receivedData,
    id: Math.random()
}

props.getExpense(data)
setToggleRender(false)
}


const toggleTrue = () => {
    setToggleRender(!toggleRender)
}
const toggleFalse = () => {
    setToggleRender(!toggleRender)
}


    return(
        <div className='new-expense'>
           {toggleRender === false ? <button onClick={toggleTrue}>Add Expense</button> :<ExpenseForm toggle ={toggleFalse}  onData={getData} />}
           
        </div>
    )
}


export default NewExpense