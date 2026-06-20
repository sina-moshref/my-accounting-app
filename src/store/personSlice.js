import { createSlice,nanoid  } from "@reduxjs/toolkit";
import { tableBody } from "../sections/quickAccess/personOfInterest/tableData";

const personSlice = createSlice({
  name: "persons",
  initialState: {
    persons: tableBody,
  },
  reducers: {
        addPerson: (state, action) => {
      const newPerson = {
        id: nanoid(),
        index: 2,
        edit: "ویرایش",
        delete: "حذف",
        ...action.payload,
      }
      state.persons.push(newPerson);
      
    },

    editPerson: (state, action) => {
      const index = state.persons.findIndex(
        (p) => p.id === action.payload.id
      );

      if (index !== -1) {
        state.persons[index] = action.payload;
      }
    },

    deletePerson: (state, action) => {
      state.persons = state.persons.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const { addPerson, editPerson, deletePerson } = personSlice.actions;
export default personSlice.reducer;
