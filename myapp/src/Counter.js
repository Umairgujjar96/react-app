
import './App.css';

import React, { useState } from 'react'

const Counter = () => {
    const[data,setdata]=useState(0);
    const increment=()=>{
        if(data<10){
            setdata(data+1);
        }else{
            alert('Cannot add more than 10 Values');
        }
        
    }
    const decrement=()=>{
        if(data>0){
            setdata(data-1);
        }else{
            alert('Cannot subtract under zero');
        }
        
    }
  
  
    return (
    <div className='cartt3 container text-center mt-5 border rounded ' >

        <h3 className='mt-5 fs-1'>{data}</h3>
        <div className='p-5 m-5'>
        
        <button onClick={increment} className='cartt2 btn btn-primary m-2 py-2 px-4'><i class="fa-solid fa-plus"></i></button>  
        <button onClick={decrement} className='cartt2 btn btn-danger m-2 py-2 px-4'><i class="fa-solid fa-minus"></i></button>
        
        </div>
      
    </div>
  )
}

export default Counter;
