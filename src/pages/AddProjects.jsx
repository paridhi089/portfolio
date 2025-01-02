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
  const [title, setTitle] = useState('');
  const [thumbURL, setThumbURL] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const [carousel, setCarousel] = useState([]); 
  const [imageData, setImageData] = useState({ src: '', caption: '' }); 

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
          carousel: carousel,
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
      setCarousel([])
    }catch(error)
    {
      console.error(error.message)
      alert("Error:", error.message)
    }
    
  }

  const handleAddToCarousel = () => {
    if (imageData.src && imageData.caption) {
      setCarousel([...carousel, { ...imageData }]);
      setImageData({ src: '', caption: '' }); // Reset form fields
    } else {
      alert("Please provide both image URL and caption.");
    }
  };

  const handleEditCarousel = (e) => {
    try {
      const updatedCarousel = JSON.parse(e.target.value);
      setCarousel(updatedCarousel);
    } catch (err) {
      alert("Invalid JSON format. Please ensure the JSON is correct.");
    }
  };

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
           
          </div>

          <div className="mb-8">
          <input
            type="text"
            placeholder="Image URL"
            className="py-2 px-4 mb-4 flex text-black w-full rounded-lg bg-white"
            value={imageData.src}
            onChange={(e) => setImageData({ ...imageData, src: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image Caption"
            className="py-2 px-4 mb-4 flex text-black w-full rounded-lg bg-white"
            value={imageData.caption}
            onChange={(e) => setImageData({ ...imageData, caption: e.target.value })}
          />
          <button
            onClick={handleAddToCarousel}
            className="btn text-black justify-center w-full bg-blue-500 flex py-2 px-4 rounded-lg"
          >
            Add to Carousel
          </button>
        </div>

        {carousel.length > 0 && (
          <div className="mb-8">
            <h3 className="text-white text-lg mb-4">Editable Carousel JSON</h3>
            <textarea
              value={JSON.stringify(carousel, null, 2)}
              onChange={handleEditCarousel}
              rows="6"
              className="w-full p-2 rounded-lg text-black bg-white border"
            />
          </div>
        )}


          <RichTextEditor content={editorContent} onChange={setEditorContent} />

          <button
            onClick={handleSubmit}
            className=" mt-8 btn text-black justify-center w-full bg-white flex py-4 px-4 rounded-2xl"
          >
            Insert
          </button>
        

        <button
          onClick={handleLogout}
          className="btn mt-8 mb-16 text-black justify-center w-full bg-red-500 flex py-4 px-4 rounded-2xl"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AddProjects;
