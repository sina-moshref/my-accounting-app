import { FiSearch } from "react-icons/fi";

export const Searchbox = ({ search, setSearch }) => {
  return (
    <div className="flex justify-end">
      <div className="relative mb-4 w-[200px] md:w-[400px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو ..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-right text-slate-700 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
      </div>
    </div>
  );
};
