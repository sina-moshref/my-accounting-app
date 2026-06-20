export default function BirthDateInput({
  label = "تاریخ تولد",
  setNewRow,
  newRow,
  name = "birthDate",
}) {
  const formatDate = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length <= 4) return numbers;

    if (numbers.length <= 6) {
      return `${numbers.slice(0, 4)}/${numbers.slice(4)}`;
    }

    return `${numbers.slice(0, 4)}/${numbers.slice(4, 6)}/${numbers.slice(6)}`;
  };

  const handleChange = (e) => {
    const formatted = formatDate(e.target.value);

    setNewRow({
      ...newRow,
      [name]: formatted,
    });
  };

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <input
        type="text"
        inputMode="numeric"
        dir="ltr"
        placeholder="1380/01/01"
        value={newRow[name] || ""}
        onChange={handleChange}
        maxLength={10}
        className="no-spinner h-12 w-full rounded-[14px] border border-slate-300 bg-slate-50 px-4 text-sm tracking-[0.12em] text-slate-800 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-indigo-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-indigo-500"
      />
    </div>
  );
}
