import { useDispatch } from "react-redux"
import anecdoteService from "../services/anecdotes"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setMessage } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        const newAnecdote = await anecdoteService.createNew(content)
        event.target.anecdote.value = ''
        dispatch(setMessage(`successfully added ${content}!`))
        dispatch(createAnecdote(newAnecdote))
        setTimeout( () => {
          dispatch(setMessage(``))
        }
        , 5000)
      }

    return (
        <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    )
}

export default AnecdoteForm