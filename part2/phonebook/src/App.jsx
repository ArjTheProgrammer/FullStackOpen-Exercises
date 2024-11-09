import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')

  const [newNum, setNewNum] = useState('')

  const [showAll, setShowAll] = useState(true)

  const [newSearch, setNewSearch] = useState([])

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

  const handleNewSearch = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value == '' ? true : false)
    setNewSearch(event.target.value)
  }

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch));


  return (
    <div>
      <h2>Phonebook</h2>
      <input value={newSearch} onChange={handleNewSearch}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handlePersonChange}/></div>
          <div>number: <input value={newNum} onChange={handleNumChange}/></div>
          <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App