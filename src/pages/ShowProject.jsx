import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../supabase/supabaseClient";
import Nav from "../components/Nav";
import LinearProgress from "@mui/joy/LinearProgress";
import Slide from "../components/projectComponets/Slide";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";

const ShowProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;

        setProject(data);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col">
          <LinearProgress
            className=" w-[200px] sm:w-[700px]"
            color="neutral"
            size="lg"
          />
          <p className=" text-center text-white">Loading...</p>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col">
          <p className=" text-[#ff0000] text-center">Error: {error}</p>
        </div>
      </div>
    );
  if (!project)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col">
          <p className=" text-[#ff0000] text-center">No Project Found</p>
        </div>
      </div>
    );

  return (
    <>
      <Nav />
      <BackBtn path={"/projects"}/>
      <div className="flex items-center justify-center min-h-screen bg-[#101418] text-white p-8">
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl font-bold mb-16 text-center">
            {project.title}
          </h1>
          <Slide slides={project.carousel} />
          <div className="pt-12 mt-6 mb-6">
            <div className="mb-6 bg-gray-400 h-px"></div>
            <h1 className="text-3xl font-bold text-left">Summary</h1>
            <p className="mt-4 text-white">{project.summary}</p>
            <div className="mt-6 bg-gray-400 h-px"></div>
          </div>

          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: project.content }}
          ></div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShowProject;
