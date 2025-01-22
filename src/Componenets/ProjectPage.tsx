import { projects } from "../data/Project";
import ProjectCard from "./ProjectCard";
import { Container, CircularProgress } from "@mui/material";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, sm: 4 } }}>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Project List</h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span>Konrix</span>
            <span className="mx-2">/</span>
            <span>Project</span>
            <span className="mx-2">/</span>
            <span>Project List</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
            <CircularProgress
              size={16}
              thickness={4}
              sx={{
                color: "inherit",
              }}
            />
            Load More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
