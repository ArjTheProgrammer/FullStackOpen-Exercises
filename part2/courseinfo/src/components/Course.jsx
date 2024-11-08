const Header = (props) => {
    return (
      <>
        <h2>{props.course}</h2>
      </>
    )
  }
  
  const Part = (props) => {
    return(
      <p>
      {props.name} {props.exercises}
    </p>
    )
  
  }
  
  const Content = (props) => {
    return(
      <>
        {
          props.parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
        }
      </>
    )
  }
  
  const Total = (props) => {
    return (
      <p style={{fontWeight: "1000"}}>total of {props.parts.reduce((total, part) => total += part.exercises, 0)}  exercises</p>
    )
  }
  
  const Course = ({course}) => {

    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }
  
  export default Course;