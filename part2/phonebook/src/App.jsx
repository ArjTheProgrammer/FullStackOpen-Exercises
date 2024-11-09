import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '04-123456'
    }
  ]) 

  const [newName, setNewName] = useState('')

  const [newNum, setNewNum] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) alert(`${newName} is already added in the phonebook`)
    else {
    setPersons(persons.concat({ name: newName, number: newNum }))
    setNewName("")
    setNewNum("")
    } 
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handlePersonChange}/></div>
          <div>number: <input value={newNum} onChange={handleNumChange}/></div>
          <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App