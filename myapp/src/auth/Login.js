import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {

    const [auth,setauth]=useState({
        email:"",
        password:""
    })
    const handle=(e)=>{
        e.preventDefault();
        if(auth.email && auth.password){
            toast.success("Login Successfully");
        }else{
            toast.error("Error Credentials not Added")
        }
        

        setauth({
            email:"",
            password:""
        })
        
    }

  return (
    <div>
    <div className='container'>
        <div className='text-center'>
        <h1>Login Screen</h1>
         <form onSubmit={handle}>
        <div  className='text-center m-auto rounded shadow bg-dark p-3 w-50'>
            
            <div>
                <input value={auth.email} onChange={(e)=>setauth({...auth,email:e.target.value})} type='email' placeholder='Enter Your Email' className='form-control p-3 mx-auto my-2'></input>
            </div>
            <div>
                <input value={auth.password} onChange={(e)=>setauth({...auth,password:e.target.value})} type='password' placeholder='Enter Your Password' className='form-control p-3 mx-auto my-2'></input>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </div>
            
</div>
            
        </form>
         
       
</div>
      
    </div>
  
</div>
)}

export default Login;