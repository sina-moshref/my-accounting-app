import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("لطفاً نام کاربری خود را وارد کنید")
      .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),

    password: Yup.string()
      .required("لطفاً کلمه عبور خود را وارد کنید")
      .min(6, "کلمه عبور باید حداقل ۶ کاراکتر باشد"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);

      navigate("/");
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-6 transition-all duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <button
        onClick={toggleTheme}
        className="absolute left-5 top-5 rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-lg transition-all duration-300 hover:scale-105 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
      >
        {theme === "dark" ? (
          <FiSun className="h-5 w-5" />
        ) : (
          <FiMoon className="h-5 w-5" />
        )}
      </button>

      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-3xl font-black text-white shadow-lg">
            میم
          </div>

          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            ورود به حساب کاربری
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            سامانه مدیریت مالی و حسابداری
          </p>
        </div>

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              نام کاربری
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="نام کاربری"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all duration-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            {formik.touched.username && formik.errors.username && (
              <p className="mt-2 text-sm text-red-500">
                {formik.errors.username}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              کلمه عبور
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all duration-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            {formik.touched.password && formik.errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/30"
          >
            ورود به سامانه
          </button>
        </form>
      </div>
    </div>
  );
}
