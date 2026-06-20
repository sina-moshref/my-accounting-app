import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

localStorage.setItem("isFirstVisit", "yes");

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("first");
    let isFirstVisit = localStorage.getItem("isFirstVisit");
    if (isFirstVisit === "yes") {
      console.log("isFirstVisit");
      navigate("/tarafhesab");
      localStorage.setItem("isFirstVisit", "no");
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-100 via-slate-50 to-white p-12 text-center shadow-2xl backdrop-blur-xl dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mb-8 text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
          مدیریت مالی
        </div>

        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-4xl font-black text-white shadow-xl">
          MM
        </div>

        <p className="text-lg leading-8 text-slate-500 dark:text-slate-400">
          نرم افزار حسابداری
        </p>
      </div>
    </div>
  );
};

export default HomePage;
