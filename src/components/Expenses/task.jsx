import React , { useState } from 'react';

import "./task.css"
import Card from '../UI/card';
import ExpensesFilter from '../filter/Filter';
import List from './List';

import ExpenseChart from './ExpenseChart';

 export default function Task(props){

const [thisYear,setThisYear] = useState("2020")








const filterYear = props.prop.filter(function(value){
    
    return  value.date.getFullYear().toString() === thisYear
})






const getYear = (value) =>{
    const year = value;

    setThisYear(year)
    
   

    
}







   

    return(
             
       
      
        <Card className='expenses'>

 
        <ExpensesFilter  onYear ={getYear} default = {thisYear} />

        
        
             <ExpenseChart expense = {filterYear}/>
<List prop = {filterYear}/>
        
    
        
        </Card>
        
       
    )

 }