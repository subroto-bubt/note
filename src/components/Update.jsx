import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNote } from "../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Update = ({
  setVisible,
  editedTitle,
  editedDescription,
  editedId,
  setEditedTitle,
  setEditedDescription,
}) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    const updatedValues = {
      id: editedId,
      title: editedTitle,
      description: editedDescription,
      createdAt: new Date().toString(),
    };
    dispatch(updateNote(updatedValues));

    toast.success("Successfully Update", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      setVisible(false);
    }, 510);
  };
  return (
    <>
      <Helmet>
        <title>Update</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 flex justify-center items-center">
        <div className="w-1/4 bg-white shadow-md p-5">
          <div>
            <div className="relative">
              <h1 className="font-mono text-2 xl text-black text-center mb-4">
                Update your note
              </h1>
              <div
                className="absolute top-0 right-3 w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer "
                onClick={() => setVisible(false)}
              >
                <RxCross2 />
              </div>
            </div>
            <input
              placeholder="title"
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              maxLength={400}
              rows={5}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none "
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button
              className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3"
              onClick={handleEdit}
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
