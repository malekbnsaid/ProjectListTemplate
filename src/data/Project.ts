
export interface ProjectMember {
  id: number;
  image: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  status: 'Completed' | 'Pending' | 'Frontend Completed';
  members: ProjectMember[];
  date: string;
  tasks: number;
  comments: number;
  progress: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Landing page Design",
    category: "Web Design",
    description: "If several languages coalesce, the grammar of the resulting language is more regular.",
    status: "Completed",
    members: [
      { id: 1, image: "/avatars/avatar1.jpg", name: "John Doe" },
      { id: 2, image: "/avatars/avatar2.jpg", name: "Jane Smith" }
    ],
    date: "15 Dec",
    tasks: 224,
    comments: 66,
    progress:  10
  },
  {
    id: 2,
    title: "App Design and Develop",
    category: "Android",
    description: "To achieve this, it would be necessary to have uniform grammar and more common words.",
    status: "Pending",
    members: [
      { id: 3, image: "/avatars/avatar3.jpg", name: "Mike Johnson" },
      { id: 4, image: "/avatars/avatar4.jpg", name: "Sarah Williams" },
      { id: 5, image: "/avatars/avatar5.jpg", name: "Tom Brown" },
      { id: 6, image: "/avatars/avatar6.jpg", name: "Lisa Anderson" }
    ],
    date: "28 Nov",
    tasks: 196,
    comments: 33,
    progress: 62
  },
  {
    id: 3,
    title: "New Admin Design",
    category: "Web Design",
    description: "If several languages coalesce, the grammar of the resulting language is more regular.",
    status: "Frontend Completed",
    members: [
      { id: 7, image: "/avatars/avatar7.jpg", name: "Alice Brown" },
      { id: 8, image: "/avatars/avatar8.jpg", name: "Bob Wilson" },
      { id: 9, image: "/avatars/avatar9.jpg", name: "Carol White" }
    ],
    date: "19 Nov",
    tasks: 69,
    comments:  102,
    progress: 100
  },
  {
    id: 4,
    title: "Custom Software Development",
    category: "Android",
    description: "Their separate existence is a myth. For science, music, sport, etc uses the vocabulary.",
    status: "Pending",
    members: [
      { id: 10, image: "/avatars/avatar10.jpg", name: "David Lee" },
      { id: 11, image: "/avatars/avatar11.jpg", name: "Emma Davis" },
      { id: 12, image: "/avatars/avatar12.jpg", name: "Frank Miller" }
    ],
    date: "02 Nov",
    tasks: 10,
    comments: 72,
    progress: 25
  },
  {
    id: 5,
    title: "Brand logo design",
    category: "Web Design",
    description: "Everyone realizes why a new common language refuse to pay expensive translators.",
    status: "Completed",
    members: [
      { id: 13, image: "/avatars/avatar13.jpg", name: "George Wilson" }
    ],
    date: "19 Nov",
    tasks: 50,
    comments:  300,
    progress: 75
  },
  {
    id: 6,
    title: "Website Redesign",
    category: "Web Design",
    description: "The languages only differ in their grammar pronunciation and their most common words.",
    status: "Completed",
    members: [
      { id: 14, image: "/avatars/avatar14.jpg", name: "Henry Taylor" },
      { id: 15, image: "/avatars/avatar15.jpg", name: "Isabella Moore" }
    ],
    date: "19 Nov",
    tasks: 69,
    comments: 102,
    progress: 50
  }
  
];
