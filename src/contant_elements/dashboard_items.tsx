import { Home, BarChart, User, Video, Clock, Book, StickyNote } from "lucide-react";

const DashboardElements = [
  {
    id: 1,
    title: "Home",
    icons: Home,
    link: "/dashboard/home",
  },
  {
    id: 2,
    title: "Analytics",
    icons: BarChart,
    link: "/dashboard/analytics",
  },
  {
    id: 3,
    title: "Profile",
    icons: User,
    link: "/dashboard/profile",
  },
  {
    id: 4,
    title: "Video",
    icons: Video,
    link: "/dashboard/video",
  },
  {
    id: 5,
    title: "History",
    icons: Clock,
    link: "/dashboard/history",
  },
  {
    id: 6,
    title: "Library",
    icons: Book,
    link: "/dashboard/library",
  },
  {
    id: 7,
    title: "Notes",
    icons: StickyNote,
    link: "/dashboard/notes",
  },
];

export default DashboardElements;