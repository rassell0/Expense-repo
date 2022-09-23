import React from 'react';
import "./date.css"

export default function Datee(props){

  const month =  props.props.toLocaleString("en-US", {month :"long"});
    const day = props.props.toLocaleString("en-us", {day :"2-digit"})
const year = props.props.getFullYear()

    return(
<div className='expense-date'>
   <div className='expense-date__month'> {month}</div> 
       <div className='expense-date__day'> {day}</div>
       <div className='expense-date__year'>{year} </div>

       </div>

    )
}

