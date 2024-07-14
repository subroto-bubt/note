import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const saveNotes = JSON.parse(localStorage.getItem("note"));
if (saveNotes) {
  initialState.notes = saveNotes;
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    updateNote: (state, action) => {
      const { id, title, description, createdAt } = action.payload;
      const note = state.notes.find((note) => note.id == id);
      if (note) {
        note.title = title;
        note.description = description;
        note.createdAt = createdAt;
        localStorage.setItem("note", JSON.stringify(state.notes));
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
