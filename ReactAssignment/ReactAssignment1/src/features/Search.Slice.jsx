import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchItem: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchItem = action.payload; // check in payload and it will be store and passed
        }
    },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;