import Nav from "../components/Nav";
import ProjectOverview from "../components/ProjectOverview";
import { useState } from "react";
import { useEffect } from "react";
import supabase from "../supabase/supabaseClient";
import { LinearProgress } from "@mui/joy";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("projects").select("*");
        if (error) throw error;
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-[#1b1b1b]">
      <Nav />
      {loading ? (
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
      ) : (
        <div className="mx-8 mb-32 sm:mx-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project) => (
            <ProjectOverview
              key={project.id}
              carousel={project.carousel}
              title={project.title}
              summary={project.summary}
              id={project.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
