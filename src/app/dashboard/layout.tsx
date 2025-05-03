"use client";

import { useState, useEffect } from "react";
import { Menu, Home, BarChart, User, Video, Clock, Book, StickyNote , LogOutIcon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DashboardElements from "@/contant_elements/dashboard_items";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial state based on window size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-900 to-purple-950 overflow-hidden">
      {/* Topbar */}
      <header className="flex items-center justify-between bg-white/10 text-white px-4 py-3 shadow-md z-10 flex-shrink-0">
        {!isLargeScreen && (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-white hover:bg-purple-600"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-purple-900 text-purple-200 shadow-md">
              <Sidebar isSidebarOpen={true} />
            </SheetContent>
          </Sheet>
        )}
        <h1 className="text-lg font-bold">My AI Guide</h1>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for large screens */}
        {isLargeScreen && (
          <aside className="w-64 h-full bg-white/10 text-purple-200 shadow-md flex flex-col flex-shrink-0">
            <Sidebar isSidebarOpen={true} />
          </aside>
        )}

        {/* Page Content */}
        <main className="flex grow p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <>
      {/* User Section */}
      <div className="flex flex-col items-center py-6 border-b border-purple-700 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="w-16 h-16 rounded-full bg-purple-700/30 border-2 border-purple-400 mb-4 shadow-lg"></div>
        {isSidebarOpen && <span className="text-sm font-semibold text-white">Username</span>}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2 bg-gradient-to-b from-purple-900 to-purple-950">
        {DashboardElements.map((item) => (
            <NavItem
                key={item.id}
                icon={item.icons}
                label={item.title}
                link={item.link}
                isSidebarOpen={isSidebarOpen}
                classname={cn(
                    "flex items-center px-4 py-3 hover:bg-purple-700/50 cursor-pointer transition-all duration-200 rounded-md group",
                    usePathname() === item.link ? "bg-purple-500/50" : ""
                )}
            />
        ))}
         <NavItem
                key="logout"
                icon={LogOut}
                label="Logout"
                link="/login"
                isSidebarOpen={isSidebarOpen}
                classname={cn(
                    "flex items-center px-4 py-3 hover:bg-purple-700/50 cursor-pointer transition-all duration-200 rounded-md group",
                   
                )}
            />
      </nav>
    </>
  );
}

function NavItem({
  icon: Icon,
  label,
    link,
  isSidebarOpen,
  classname
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
    link: string;
  isSidebarOpen: boolean;
    classname?: string;
}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    };
  return (
    <div  className={classname} onClick={handleClick}>
      <Icon className="w-5 h-5 text-purple-300 group-hover:text-white" />
      {isSidebarOpen && <span className="ml-4 text-sm text-purple-300 group-hover:text-white">{label}</span>}
    </div>
  );
}
