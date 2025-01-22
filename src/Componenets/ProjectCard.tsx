import { Card, Avatar, AvatarGroup, Divider } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";

import { Project, ProjectMember } from "../data/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#1db455]";
      case "Pending":
        return "bg-[#eccc6c]";
      case "Frontend Completed":
        return "bg-[#1db455]";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="rounded-xl shadow-sm h-full bg-white dark:bg-gray-800 flex flex-col">
      {/* Header Section */}
      <div className="px-6 pt-2.5 pb-2.5">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {project.category}
          </div>
          <div
            className={`${getStatusColor(
              project.status
            )} text-white px-2 py-1 rounded-md text-xs font-medium leading-normal`}
          >
            {project.status}
          </div>
        </div>
      </div>

      <Divider />

      {/* Body Section */}
      <div className="px-6 pt-6 pb-5 h-[180px] flex flex-col">
        <div className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </div>

        <div className="text-[14px] text-gray-500 dark:text-gray-400 mb-auto leading-normal">
          {project.description}
        </div>

        <AvatarGroup
          max={3}
          sx={{
            justifyContent: "flex-end",
            "& .MuiAvatar-root": {
              width: 30,
              height: 30,
              fontSize: "13px",
              border: "2px solid white",
            },
          }}
        >
          {project.members.map((member: ProjectMember) => (
            <Avatar key={member.id} src={member.image} alt={member.name} />
          ))}
        </AvatarGroup>
      </div>

      <Divider />

      {/* Footer Section */}
      <div className="flex flex-wrap justify-between items-center p-4 dark:bg-gray-900">
        <div className="flex space-x-4 items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <CalendarTodayOutlinedIcon fontSize="small" />
            <span>{project.date}</span>
          </div>

          <div className="flex items-center space-x-1">
            <ReorderIcon fontSize="small" />
            <span>{project.tasks}</span>
          </div>

          <div className="flex items-center space-x-1">
            <ForumOutlinedIcon fontSize="small" />
            <span>{project.comments}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <div
            className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            style={{
              flexGrow: 1,
              minWidth: "130px",
              maxWidth: "300px",
            }}
          >
            <div
              className={`h-full ${getStatusColor(project.status)} rounded-full`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-300 min-w-[40px]">
            {project.progress}%
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
