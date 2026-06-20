import { useState } from "react";
import DataTable from "../components/Table";
import { thead } from "../sections/quickAccess/personOfInterest/tableData";
import AddPersonModal from "../sections/quickAccess/personOfInterest/AddPersonModal";
import { useDispatch, useSelector } from "react-redux";
import { deletePerson } from "../store/personSlice";

const PersonOfInterest = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModalId, setEditModalId] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();

  const persons = useSelector((state) => state.persons.persons);

  const confirmDelete = () => {
    dispatch(deletePerson(selectedId));
    setShowDeleteModal(false);
  };

  const handleOpenModal = (id) => {
    console.log("reached");
    setEditModalId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditModalId(null);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  return (
    <>
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900">
            <h2 className="mb-3 text-xl font-bold text-zinc-800 dark:text-white">
              تایید حذف
            </h2>

            <p className="mb-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              آیا از حذف این شخص اطمینان دارید؟
              <br />
              .این عملیات قابل بازگشت نیست
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="rounded-xl border border-zinc-300 px-4 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
              >
                انصراف
              </button>

              <button
                onClick={confirmDelete}
                className="rounded-xl bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="align-center relative mb-2 mt-3 flex justify-center">
        <div className="mt-16 w-screen px-3 md:px-9 lg:px-12">
          <AddPersonModal
            handleCloseModal={handleCloseModal}
            openEditModal={openModal}
            editModalId={editModalId}
          />

          <DataTable
            thead={thead}
            tbody={persons}
            headerHeight="350"
            sortBy={"asc"}
            sortOrder={"fullName"}
            openEditModal={(id) => handleOpenModal(id)}
            deleteRow={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default PersonOfInterest;
