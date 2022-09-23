import React from 'react';
import "./list.css"
import Expense from './Expense';

const List = (props) =>{

const expenses = props.prop.map(item =>{
    return    <Expense prop = {item} key={item.id}  />
    })

    return(
        <ul className='expenses-list'>
        {expenses.length === 0 ? <h2 className='expenses-list__fallback'>No Expenses Found</h2> : expenses}
        </ul>
    )
}

export default List
