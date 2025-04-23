import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'

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

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state).slice().sort((a, b) => b.votes - a.votes)


    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(voteFor(anecdote.id))}/>)}
        </div>
    )
}

export default Anecdotes