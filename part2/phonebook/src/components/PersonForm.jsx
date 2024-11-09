const PersonForm = (props) => {
    return (
        <form onSubmit={props.add}>
        <div>name: <input value={props.name} onChange={props.personChange}/></div>
        <div>number: <input value={props.num} onChange={props.numChange}/></div>
        <div><button type="submit">add</button></div>
    </form>
    )
}

export default PersonForm