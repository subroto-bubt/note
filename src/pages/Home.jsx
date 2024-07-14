import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddNotes = (e) => {
    e.preventDefault();

    if (title !== "" && description !== "") {
      const newNote = {
        id: Date.now().toString(32),
        title,
        description,
        createdAt: new Date().toString(),
      };
      setTitle("");
      setDescription("");
      dispatch(addNote(newNote));
      toast.success("Your Data is Save now", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Please fill up the empty field", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen bg-slate-800 flex justify-center items-center">
        <div className="w-1/4 bg-slate-950 shadow-md rounded-md px-4 py-5 box-border">
          <div>
            <h1 className="font-mono text-3xl text-gray-300  text-center mb-4">
              Add your notes
            </h1>
            <input
              placeholder="title"
              className="w-full rounded-md  bg-gray-600 border border-blue-500 p-2 outline-none"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              placeholder="Description"
              maxLength={400}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-600 rounded-md border border-blue-500 p-2 mt-3 outline-none resize-none "
              value={description}
            />
            <button
              onClick={handleAddNotes}
              className="bg-green-950 text-white text-xl font-mono px-5 py-2 rounded-md mt-3"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
