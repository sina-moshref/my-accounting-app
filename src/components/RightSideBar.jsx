import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { sideBarData } from "../libs/helperData";

function SidebarItem({ item, level = 0 }) {
  const [open, setOpen] = useState(false);

  const hasChildren =
    item.subItems && Array.isArray(item.subItems) && item.subItems.length > 0;

  return (
    <div className="z-999 space-y-1">
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className={`group flex w-full items-center justify-between rounded-xl px-1 py-3 transition-all duration-300 hover:bg-slate-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 active:scale-[0.98] dark:hover:bg-slate-800 dark:hover:text-indigo-300 ${
          level === 0
            ? "font-medium text-slate-900 dark:text-slate-100"
            : "mr-3 text-xs text-slate-500 dark:text-slate-400"
        } `}
      >
        <div className="flex items-center gap-2">
          {hasChildren && (
            <span
              className={`transition-transform duration-300 ${
                open ? "rotate-180 text-indigo-400" : ""
              }`}
            >
              <MdKeyboardArrowDown className="h-5 w-5" />
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 transition-transform group-hover:-translate-x-1">
          <span>{item.name}</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-indigo-400 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 dark:bg-slate-800">
            {item.icon || <HiMenuAlt3 />}
          </div>
        </div>
      </button>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="1 space-y-1 border-r border-slate-300 pr-1 dark:border-slate-700">
            {item.subItems.map((subItem, index) => (
              <SidebarItem
                key={`${subItem.name}-${index}`}
                item={subItem}
                level={level + 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RightSidebar({ isOpen, ref }) {
  return (
    <div
      ref={ref}
      className={`no-scrollbar fixed right-0 top-0 z-40 h-full w-72 overflow-y-auto border-l border-slate-200 bg-white shadow-[0_0_40px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-900 ${isOpen ? "translate-x-0" : "translate-x-full"} `}
    >
      <div className="flex flex-col gap-2 p-2 pt-20">
        {sideBarData.map((item, index) => (
          <SidebarItem key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
