import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        // dispatch(setMessage(`successfully added ${content}!`))
        // setTimeout( () => {
        //   dispatch(setMessage(``))
        // }
        // , 5000)
        dispatch(setNotification(`successfully added ${content}!`, 10))
      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    )
}

export default AnecdoteForm