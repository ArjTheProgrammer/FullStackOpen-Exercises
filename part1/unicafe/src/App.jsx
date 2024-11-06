import { useState } from 'react'


const Title = ({text}) => <h1>{text}</h1>;

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const ButtonContainer = (props) => { 
  const buttons = [ 
    { text: 'good', handleClick: () => props.setGood(props.good + 1) }, 
    { text: 'neutral', handleClick: () => props.setNeutral(props.neutral + 1) }, 
    { text: 'bad', handleClick: () => props.setBad(props.bad + 1) } 
  ];
  return(
    <div style={{ display: 'flex'}}>
    {buttons.map( (button, index) => (
      <Button key={index} handleClick={button.handleClick} text={button.text}/> 
    ))}
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const states = [good, neutral, bad];
  let isNull = true;

  isNull = !states.some(state => state != 0);

  if (isNull) return(<span>no feedback given</span>);
  
  else return(
    <table>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={Math.round(((good - bad) * 100)/ total) / 100}/>
      <StatisticLine text="positive" value={`${Math.round((good / total) * 10000) / 100} %`}/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Title text="give feedback"/>
      <ButtonContainer setGood={setGood} setNeutral={setNeutral} setBad={setBad} 
      good={good} neutral={neutral} bad={bad}/>
      <Title text="statistics"/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App