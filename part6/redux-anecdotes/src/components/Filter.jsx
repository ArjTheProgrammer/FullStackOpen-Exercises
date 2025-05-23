import { useDispatch } from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        dispatch({type: 'filter/filterChange', payload: event.target.value})
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} name='filter'/>
      </div>
    )
  }
  
  export default Filter