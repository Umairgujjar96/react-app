import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Signupscreen = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    
    
    const formhandler=(e)=>{
        toast.success("User Added Successfully")
        e.preventDefault();
        console.log(name,email,password)
        setemail("");
        setname("");
        setpassword("");
    }

    
  return (
    <div className='container'>
        <div className='text-center'>
        <h1>SignUp Screen</h1>
        <form onSubmit={formhandler}>
        <div  className='text-center m-auto rounded shadow bg-dark p-3 w-50'>
            <div>
                <input value={name} onChange={(e)=>setname(e.target.value)} type='text' placeholder='Enter Your Name' className='form-control p-3 mx-auto my-2'></input>
            </div>
            <div>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type='email' placeholder='Enter Your Email' className='form-control p-3 mx-auto my-2'></input>
            </div>
            <div>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} type='password' placeholder='Enter Your Password' className='form-control p-3 mx-auto my-2'></input>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
            
</div>
            
        </form>
        
       
</div>
      
    </div>
  )
}

export default Signupscreen;