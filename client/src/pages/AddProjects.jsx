import { useEffect } from "react";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../supabase/supabaseClient";
import RichTextEditor from "../components/RichTextEditor";
import "../index.css";

const AddProjects = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [thumbURL, setThumbURL] = useState('');
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;
      if (!user) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit= async(e) =>{
    e.preventDefault();
    try{
      const {error}=await supabase
      .from("projects")
      .insert([
        {
          title:title,
          thumbURL:thumbURL,
          content:editorContent
        }
        
      ])
      
      if(error)
      {
        throw error
      }
      alert('Project Added Successfully')
      setThumbURL('')
      setTitle('')
      setEditorContent('')
    }catch(error)
    {
      console.error(error.message)
      alert("Error:", error.message)
    }
    
  }

  return (
    <div className="bg-[#1b1b1b]">
      <Nav />

      <div className="mx-16 rounded-md">
        
          <div className="flex-col gap-8">
            <input
              type="text"
              placeholder="Title"
              className="py-4 px-4 mb-8 flex text-black w-full rounded-lg bg-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Thumbnail Url"
              className="px-4 py-4 mb-8 flex text-black w-full rounded-lg bg-white"
              value={thumbURL}
              onChange={(e) => setThumbURL(e.target.value)}
              required
            />
          </div>
          <RichTextEditor content={editorContent} onChange={setEditorContent} />

          <button
            onClick={handleSubmit}
            className=" mt-8 btn text-black justify-center w-full bg-white flex py-4 px-4 rounded-2xl"
          >
            Insert
          </button>
        

        <button
          onClick={handleLogout}
          className="btn mt-8 mb-16 text-black justify-center w-full bg-[#FF0000] flex py-4 px-4 rounded-2xl"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AddProjects;
