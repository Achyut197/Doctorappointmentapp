import React, { useState } from "react";

const Login=()=>{
    const [Loginstate,setLoginstate]=useState('Sign Up');

    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [name,setname]=useState('');

    const submitdata=async(event)=>{
        event.preventDefault();
    }
    return (
        <form onSubmit={submitdata} className="min-h-[80vh] flex items-center ">
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
                <p className="text-2xl font-semibold text-center">{Loginstate === "Sign Up"? "Create Account":"Login"}</p>
                <p>Please {Loginstate === "Sign Up"? "sign up":"log in"} to book appointment</p>
                {
                    Loginstate === "Sign Up" && <div className="w-full">
                    <p>Full Name</p>
                    <input className="border border-primary rounded  w-full p-2 mt-1" type="text" onChange={(e)=>setname(e.target.value)} value={name} required />
                </div>

                }
                
                <div className="w-full">
                    <p>Email</p>
                    <input className="border border-primary rounded  w-full p-2 mt-1" type="email" onChange={(e)=>setEmail(e.target.value)} value={Email} required/>
                </div>

                <div className="w-full">
                    <p>Password</p>
                    <input className="border border-primary rounded  w-full p-2 mt-1" type="password" onChange={(e)=>setPassword(e.target.value)} value={Password} required/>
                </div>
                <button className="bg-primary text-white w-full py-2 rounded-md text-base mt-2">{Loginstate === "Sign Up"? "Create Account":"Login"}</button>
                {
                    Loginstate === "Sign Up" ? <p>Already have an account?<span onClick={()=>setLoginstate("Login")} className="text-primary underline cursor-pointer">Login Here</span></p>:<p>Create an new account? <span onClick={()=>setLoginstate("Sign Up")} className="text-primary underline cursor-pointer">Click Here</span></p>
                }
            </div>
        </form>
    )
}


export default Login;
