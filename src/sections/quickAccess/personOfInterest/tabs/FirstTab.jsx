import CustomInput from "../../../../components/CustomInput";
import SelectBox from "../../../../components/SelectBox";
import CitySelectBox from "../../../../components/SelectBox";
import { iranCities } from "../tableData";

export default function FirstTab({ newRow, setNewRow }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-6 md:grid-cols-5">
        {[
          ["badHesab", "بد حساب"],
          ["buyer", "خریدار"],
          ["seller", "فروشنده"],
          ["broker", "واسطه فروش"],
          ["investor", "سرمایه گذار"],
        ].map(([key, label]) => (
          <label
            key={key}
            className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <input
              type="checkbox"
              checked={newRow[key]}
              onChange={(e) =>
                setNewRow({
                  ...newRow,
                  [key]: e.target.checked,
                })
              }
              className="h-4 w-4 accent-indigo-600"
            />

            {label}
          </label>
        ))}
      </div>

      <div
        dir="rtl"
        className="grid-cols-2 gap-4 border-b border-slate-200 pb-6 md:grid-cols-4 rtl:grid"
      >
        {[
          ["active", "فعال"],
          ["noteBook", "انتقال به دفترچه تلفن"],
        ].map(([key, label]) => (
          <label
            dir="ltr"
            key={key}
            className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <input
              type="checkbox"
              checked={newRow[key]}
              onChange={(e) =>
                setNewRow({
                  ...newRow,
                  [key]: e.target.checked,
                })
              }
              className="h-4 w-4 accent-indigo-600"
            />

            {label}
          </label>
        ))}
      </div>

      {/* INPUTS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <CustomInput
          label=" کد طرف حساب"
          newRow={newRow}
          setNewRow={setNewRow}
          name={"code"}
          type="number"
        />
        <CustomInput
          label="نام طرف حساب"
          newRow={newRow}
          name={"fullName"}
          setNewRow={setNewRow}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-600 dark:text-slate-400">
          آدرس
        </label>

        <textarea
          rows={1}
          dir="rtl"
          value={newRow.address}
          onChange={(e) => setNewRow({ ...newRow, address: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
      </div>
      <div dir="rtl" className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <CustomInput
          className="col-span-3"
          label="واسطه فروش"
          newRow={newRow}
          setNewRow={setNewRow}
          name={"salesIntermediary"}
        />
        <CustomInput
          className="col-span-1"
          label="پورسانت - %"
          newRow={newRow}
          setNewRow={setNewRow}
          placeHolder="%"
          name={"porsant"}
          type="number"
        />
      </div>

      {/* ADDRESS */}
    </>
  );
}
