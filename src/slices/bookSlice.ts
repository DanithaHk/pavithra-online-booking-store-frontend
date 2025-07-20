import {createSlice} from "@reduxjs/toolkit";
import type {bookData} from "../model/bookData.ts";


interface BookState {
    books: bookData[]

}
const initialState : BookState= {
    books: []
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        }
    }
})

export const {addBook} = bookSlice.actions
export default bookSlice.reducer