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

export const setNotification = (message, sec) => {
    return async dispatch => {
        dispatch(setMessage(message))
        setTimeout( () => {
          dispatch(setMessage(""))
        }
        , sec * 1000)
    }
}

export default messageSlice.reducer