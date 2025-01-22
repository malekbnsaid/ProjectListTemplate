import { ReactNode, useState } from "react";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

// Icon imports
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarTodayOutlined";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import FolderIcon from "@mui/icons-material/FolderOutlined";
import ViewKanbanIcon from "@mui/icons-material/ViewKanbanOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenterOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from '@mui/material/Avatar';

// Type definitions for component props
interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  to: string;
}

interface NavSectionProps {
  title: string;
  isOpen: boolean;
}

interface SidebarProps {
  children: ReactNode;
}

// Navigation data structure
const navigationItems = [
  {
    section: "Menu",
    items: [
      { icon: <HomeIcon />, text: "Home", to: "/" },
    ],
  },
  {
    section: "Apps",
    items: [
      { icon: <CalendarTodayIcon />, text: "Calendar", to: "/calendar" },
      { icon: <ConfirmationNumberIcon />, text: "Tickets", to: "/tickets" },
      { icon: <FolderIcon />, text: "File Manager", to: "/file-manager" },
      { icon: <ViewKanbanIcon />, text: "Kanban Board", to: "/kanban" },
      { icon: <BusinessCenterIcon />, text: "Project", to: "/project" },
    ],
  },
  {
    section: "Custom",
    items: [
      { icon: <LockIcon />, text: "Auth Pages", to: "/auth" },
    ],
  },
];

// Individual navigation item component
const NavItem = ({ icon, text, isOpen, to }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-3 py-2.5 text-gray-500 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-800 hover:text-blue-600 hover:rounded-xl ${
        isActive ? "bg-blue-100 dark:bg-blue-900 text-blue-600" : ""
      }`
    }
  >
    <div className="w-6 flex-shrink-0 flex justify-center">{icon}</div>
    {isOpen && <span className="text-sm font-medium truncate">{text}</span>}
  </NavLink>
);

// Section header component
const NavSection = ({ title, isOpen }: NavSectionProps) => (
  <div className="h-9 flex items-center px-4">
    <span className={`${isOpen ? "text-xs" : "invisible"} font-semibold text-gray-400 dark:text-gray-500 uppercase`}>
      {title}
    </span>
  </div>
);

// Top navigation bar component
const TopBar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    const isDark = !darkMode;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
    setDarkMode(isDark);
  }

  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b dark:border-gray-700 flex justify-between items-center px-4">
      <div>
        <IconButton onClick={() => setIsOpen(!isOpen)} className="text-gray-500 dark:text-gray-300 hover:text-blue-600" size="large">
          <MenuIcon />
        </IconButton>
        <IconButton onClick={() => setIsOpenSearch(true)} className="text-gray-500 dark:text-gray-300 hover:text-blue-600" size="large">
          <SearchIcon />
        </IconButton>
      </div>

      <div className='flex items-center gap-x-2'>
      <IconButton
      onClick={toggleDarkMode}
      className="hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-500 dark:text-gray-300 hover:text-blue-600"
      size="large"
       >
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
        <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
      </div>


      {/* Dialog for search */}
  <Dialog
      open={isOpenSearch}
      onClose={() => setIsOpenSearch(false)}
      PaperProps={{
        style: {
          position: "absolute",
          top: "30px",
          margin: "0 auto",
          width: "550px",
          height: "60px",
          borderRadius: "15px",
          backgroundColor: "white", 
              },
            }}
      >
    <DialogContent
      style={{
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
      className="bg-white dark:bg-gray-800"  
    >
      <TextField
        fullWidth
        autoFocus
        placeholder="Type to search..."
        variant="standard"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "gray" }} />
            </InputAdornment>
          ),
        }}
        style={{
          backgroundColor: "transparent",
          fontSize: "16px",
          padding: "4px 0",
          color: "black", 
        }}
        className="dark:text-white"  
      />
        </DialogContent>
      </Dialog>

    </div>
  );
};


// Main Sidebar component
const Sidebar = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } flex flex-col transition-all duration-300 min-h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-700`}
      >
     <div className="h-16 flex items-center px-4 border-b dark:border-gray-700">
        {/* Logo Image */}
        <img
          src="public/images/logo.png" 
          alt="Logo"
          className={`h-7 ${!isOpen && "invisible"}`}
        />
        
      </div>


        <nav className="flex-1 flex flex-col py-2">
          {navigationItems.map((group, groupIndex) => (
            <div key={groupIndex} className="w-full">
              <NavSection title={group.section} isOpen={isOpen} />
              <div className="rounded-lg mx-2">
                {group.items.map((item, itemIndex) => (
                  <NavItem key={itemIndex} icon={item.icon} text={item.text} isOpen={isOpen} to={item.to} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
