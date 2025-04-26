import { createSlice } from "@reduxjs/toolkit";

const initialMessage = 'Hello!'

const messageSlice = createSlice({
    name: 'message',
    initialState: initialMessage,
    reducers: {
        setMessage (state, action) {
            return action.payload
        }
    }
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer