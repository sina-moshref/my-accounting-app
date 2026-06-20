export default function CustomInput({
  label = "",
  setNewRow,
  newRow,
  type,
  name,
  placeHolder,
  ...props
}) {
  return (
    <div {...props}>
      <label className="mb-2 block text-sm text-slate-600 dark:text-slate-400">
        {label}
      </label>

      <input
        type={type}
        dir="rtl"
        placeholder={placeHolder}
        value={newRow[name]}
        onChange={(e) => setNewRow({ ...newRow, [name]: e.target.value })}
        className="no-spinner w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      />
    </div>
  );
}
