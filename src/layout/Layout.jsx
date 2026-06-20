import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import RightSidebar from "../components/RightSideBar";
import LeftSidebar from "../components/LeftSideBar,";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sideRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;

      if (windowWidth - e.clientX <= 10) {
        setIsOpen(true);
      } else if (!sideRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const marginClass = isOpen ? "mr-64" : "mr-0";

  console.log("jv;kdjfkga");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 transition-all duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <div className="relative flex">
          <RightSidebar
            ref={sideRef}
            isOpen={isOpen}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            onClose={toggleMenu}
          />

          <LeftSidebar />

          {/* Main Content Area */}
          {!isOpen && (
            <button
              onClick={toggleMenu}
              className="absolute right-10 top-4 z-40 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <HiMenuAlt3 className="h-6 w-6" />
            </button>
          )}
          <main
            className={`relative min-h-screen flex-1 bg-gradient-to-b from-slate-100 via-slate-50 to-white transition-all duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 ${marginClass} `}
          >
            <div className="app-container">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
