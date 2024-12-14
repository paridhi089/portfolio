import Nav from "../components/Nav"
import {useDispatch} from 'react-redux'
import { useState } from "react";
import supabase from '../supabase/supabaseClient'
import {setUser} from '../redux/authActions'


const Login=()=>{

    const dispatch=useDispatch();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState("");

    const handleLogin=async(e)=>{
        e.preventDefault()
        setError("")
        try{
            const {user,error}=await supabase.auth.signInWithPassword({
                email:email,
                password:password
            });
            if(user) 
            {
                dispatch(setUser(user))
                alert(user.email)
            }
            if(error) throw error
        }
        catch(error)
        {
            setError(error.message)
        }

    }
    return (

    <div className="bg-[#1b1b1b]">
        <Nav/>
        <div className="flex justify-center h-full items-center align-middle min-h-screen ">
            <div className="itemNeu  justify-center items-center flex flex-col p-16 sm:w-1/3 sm:mx-2 w-full">
                <form className="w-full" onSubmit={handleLogin}>
                    <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="itemNeu text-white w-full flex py-4 px-4 mb-8" />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  className="itemNeu  text-white w-full flex py-4 px-4 mb-8" />
                    <button className="btn text-black justify-center w-full bg-white flex py-4 px-4 rounded-2xl"  type="submit">Login</button>
                </form>
            </div>


            
           

        </div>
        
    </div>
    )
}

export default Login;