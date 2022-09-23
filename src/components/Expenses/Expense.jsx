import React, {useState} from 'react';
import "./expense.css"
import Datee from './Date';
import Card from '../UI/card';

export default function Expense(props){

const [state,setState] = useState("hello")

const click = () =>{
   setState("goodbye")
}


    return(
        <li>
        <Card className='expense-item'>
       
       <div>

       <Datee props = {props.prop.date} />
       
       </div>
<div className='expense-item__description'>
    <h2>{props.prop.title}</h2>
    
<div className='expense-item__price'>
${props.prop.amount}
</div>
<button onClick={click} > {state}</button>
</div>


        </Card>
        </li>
    )
}