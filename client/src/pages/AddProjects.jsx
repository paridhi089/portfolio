import { useEffect } from "react";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../supabase/supabaseClient";
import RichTextEditor from "../components/RichTextEditor";
import '../index.css'


const AddProjects=()=>{

    const navigate=useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [editorContent, setEditorContent] = useState('');

    useEffect(()=>
    {
        const checkUser =async () =>{
            const {data} =await supabase.auth.getSession();
            const user= data.session?.user
            if(!user){
                navigate('/')

            }

        };
        checkUser();
    },[navigate]

)

const handleLogout = async ()=>{
    try{
        const { error }= await supabase.auth.signOut();
        if(error) throw error;
        navigate("/")
        
        }
        catch(error)
        {
            console.log(error)
        }
    }





    return(
        <div className="bg-[#1b1b1b]">
             <Nav/>

             <div className="itemNeu mx-16 rounded-md">
             <RichTextEditor content={editorContent} onChange={setEditorContent}/>


             <h1 className="text-white">Add Project</h1>
             <button onClick={handleLogout} className="btn text-black justify-center w-full bg-white flex py-4 px-4 rounded-2xl">Log Out</button>
</div>
        </div>
       
    )
}

export default AddProjects;