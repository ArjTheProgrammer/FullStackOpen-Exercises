import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { createSelector } from '@reduxjs/toolkit'

const selectAnecdotes = state => state.anecdotes
const selectFilter = state => state.filter

const filteredAnecdotes = createSelector(
  [selectAnecdotes, selectFilter],
  (anecdotes, filter) => {
    return anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      .slice()
      .sort((a, b) => b.votes - a.votes)
  }
)

const Anecdote = ({ anecdote, handleVote }) => {
    return (
      <div>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleVote}>vote</button>
        </div>
      </div>
    )
}

Anecdote.propTypes = {
  anecdote: PropTypes.shape({
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
  }).isRequired,
  handleVote: PropTypes.func.isRequired
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(filteredAnecdotes)


    return (
        <div>
            {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch({type: 'anecdote/voteFor', payload: anecdote.id})}/>)}
        </div>
    )
}

export default AnecdoteList