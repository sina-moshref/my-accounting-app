import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { leftBaritems } from "../libs/helperData";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function LeftSidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sidebarRef = useRef(null);

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div ref={sidebarRef}>
      <div className="absolute left-4 top-4 z-50 flex items-center gap-3">
        <button
          onClick={toggleMenuHandler}
          className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <FiMenu className="h-6 w-6" />
        </button>

        <button
          onClick={toggleTheme}
          className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          {theme === "dark" ? (
            <FiSun className="h-5 w-5" />
          ) : (
            <FiMoon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* DROPDOWN MENU */}
      {toggleMenu && (
        <div className="fixed left-4 top-20 z-50">
          <div className="w-80 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95">
            <div className="space-y-2">
              {leftBaritems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    onClick={toggleMenuHandler}
                    key={index}
                    to="./tarafhesab"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10"
                  >
                    {/* ICON BOX */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-indigo-500 transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white dark:bg-slate-700 dark:text-indigo-400">
                      <Icon size={18} />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">
                        {item.title}
                      </h3>
                    </div>

                    <span className="text-slate-400 transition group-hover:text-indigo-500 dark:text-slate-500 dark:group-hover:text-indigo-300">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftSidebar;
