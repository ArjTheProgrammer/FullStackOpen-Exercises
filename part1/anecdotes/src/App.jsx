import { useState } from 'react'


const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Title = ({text}) => <h1>{text}</h1>;

const Info = ({text, points}) => {
  return (
    <>
      <div>
        {text}
      </div>
      <div>
        has {points} votes
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initPoints = Array(anecdotes.length).fill(0);

  const [points, setPoints] = useState(initPoints); 
  const [selected, setSelected] = useState(0);
  const [mostVote, setMostVote] = useState(0);

  const handleVote = () => {
    const copy = {...points};
    copy[selected] += 1; 
    if (copy[selected] > copy[mostVote]) setMostVote(selected);
    setPoints(copy);
  }

  const handleNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <>
      <Title text="Anecdote of the Day"/>
      <Info text={anecdotes[selected]} points={points[selected]}/>
      <Button handleClick={handleVote} text="vote"/>
      <Button handleClick={handleNextAnecdote} text="next anecdote"/>
      <Title text="Anecdote with most votes"/>
      <Info text={anecdotes[mostVote]} points={points[mostVote]}/>
    </>)
}

export default App