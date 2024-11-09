import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')

  const [newNum, setNewNum] = useState('')

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
    setNewSearch(event.target.value)
  }

  const personsToShow = newSearch === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch));


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} handleEvent={handleNewSearch}/>
      <h2>Add a new</h2>
      <PersonForm add={addPerson} name={newName} personChange={handlePersonChange}
      num={newNum} numChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App