import React from 'react';
import ChartBars from './ChartBars';
import "./chart.css"

const Chart = (props) =>{
    const maxArray = props.dataPoint.map(data=> data.value)
const max = Math.max(...maxArray)

const bars = props.dataPoint.map(dataPoint =>{
    return<ChartBars 
    value={dataPoint.value}
    maxValue = {max}
    label={dataPoint.label}
    key={dataPoint.label}
    />
    
})

return(
    <div className='chart'>
        {bars}
    </div>
)
}

export default Chart