import Person from './Person'

const Persons = ({persons, handleDelete}) => {
    return(
        <>
        {persons.map(person => <Person key={person.name} id={person.id} name={person.name} number={person.number} handleDelete={handleDelete}/>)}
        </>
    );
}

export default Persons