import { useEffect, useRef, useState } from "react";
import { HiPlus, HiX } from "react-icons/hi";
import SecondTab from "./tabs/SecondTab";
import ThirdTab from "./tabs/ThirdTab";
import FourthTab from "./tabs/FourthTab";
import FirstTab from "./tabs/FirstTab";
import { tableBody } from "./tableData";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, editPerson } from "../../../store/personSlice";

const initialRow = {
  code: "",
  name: "",
  nationalCode: "",
  phone: "",
  address: "",
  buyer: false,
  seller: false,
  broker: false,
  investor: false,
};

export default function AddPersonModal({
  openEditModal,
  handleCloseModal,
  editModalId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [newRow, setNewRow] = useState(initialRow);
  const dispatch = useDispatch();

  const persons = useSelector((state) => state.persons.persons);

  useEffect(() => {
    if (editModalId) {
      const editedItem = persons.find((item) => item.id === editModalId);

      if (editedItem) {
        setNewRow(editedItem);
      }
    } else {
      setNewRow(initialRow);
    }
  }, [editModalId]);

  useEffect(() => {
    if (openEditModal) setOpenModal(true);
  }, [openEditModal]);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
        handleCloseModal();
      }
    };

    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  const updateRow = () => {
    dispatch(editPerson(newRow));
    setOpenModal(false);
    handleCloseModal();
  };

  const addNewRow = () => {
    const row = {
      id: Date.now(),
      ...newRow,
    };

    dispatch(addPerson(row));

    setOpenModal(false);

    setNewRow({
      code: "",
      name: "",
      nationalCode: "",
      phone: "",
      address: "",
      buyer: false,
      seller: false,
      broker: false,
      investor: false,
    });
  };

  const handleSubmit = () => {
    if (editModalId) {
      updateRow();
    } else {
      addNewRow();
    }
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          <HiPlus className="h-5 w-5" />
          افزودن طرف حساب
        </button>
      </div>
      {openModal && (
        <div className="fixed inset-0 z-[999] flex max-h-screen items-center justify-center bg-black/40 p-4 py-6 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative h-[92%] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* HEADER */}
            <div className="flex flex-row-reverse items-center justify-between border-b border-slate-200 px-6 py-2 dark:border-slate-800">
              <div />
              <h2 className="mb-0 text-center text-lg font-bold text-slate-800 dark:text-slate-100">
                معرفی طرف حساب جدید
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="rounded-xl p-2 text-slate-500 transition-all hover:bg-slate-100 hover:text-red-500 dark:hover:bg-slate-800"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            {/* TABS */}
            <div className="flex flex-row-reverse flex-wrap justify-around gap-2 border-b border-slate-200 p-4 pt-6 dark:border-slate-800">
              {["اطلاعات اصلی", "اطلاعات تکمیلی", "سقف اعتبار"].map(
                (tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeTab === index
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    } `}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* CONTENT */}
            <div className="space-y-6 p-6">
              {activeTab === 0 && (
                <FirstTab newRow={newRow} setNewRow={setNewRow} />
              )}

              {activeTab === 1 && (
                <SecondTab newRow={newRow} setNewRow={setNewRow} />
              )}

              {activeTab === 2 && (
                <FourthTab newRow={newRow} setNewRow={setNewRow} />
              )}
            </div>

            {/* FOOTER */}
            {activeTab === 2 && (
              <div className="absolute bottom-0 flex w-full items-center justify-end gap-3 border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                <button
                  onClick={() => setOpenModal(false)}
                  className="rounded-2xl border border-slate-200 px-5 py-2 text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  انصراف
                </button>

                <button
                  onClick={handleSubmit}
                  className="rounded-2xl bg-indigo-600 px-5 py-2 font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-indigo-500"
                >
                  ثبت اطلاعات
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
