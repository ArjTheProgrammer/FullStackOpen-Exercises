import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import phonebookService from './services/phonebookService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')

  const [newNum, setNewNum] = useState('')

  const [newSearch, setNewSearch] = useState([])

  const [message, setNewMessage] = useState(null)

  useEffect(() => {
    phonebookService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = { 
      name: newName, 
      number: newNum 
    }

    if (persons.some(person => person.name === newName)){
      if(confirm(`${newName} is already added in the phonebook, replace the old number with new one?`)){
        const existingPerson = persons.find(person => person.name === newName)
        const changeNumber = {...existingPerson, number: newNum}

        phonebookService
        .update(existingPerson.id, changeNumber)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          setNewName("")
          setNewNum("")

          setNewMessage(`Updated ${existingPerson.name}`)
        })
        .catch(error => setNewMessage(`Information of ${existingPerson.name} has been removed from the server`))
      }
    }
    else {
      phonebookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("")
        setNewNum("")

        setNewMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => setNewMessage(null), 5000)
      })
    } 
  }

  const deletePerson = (name, id) => {
    if(confirm(`Delete ${name} ?`)){
      phonebookService
      .dlt(id)
      .then(response => {
        setPersons(persons.filter(person => person.id != response.id))
      })
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
      <Notification message={message}/>
      <Filter value={newSearch} handleEvent={handleNewSearch}/>
      <h2>Add a new</h2>
      <PersonForm add={addPerson} name={newName} personChange={handlePersonChange}
      num={newNum} numChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={deletePerson}/>
    </div>
  )
}

export default App