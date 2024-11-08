const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
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
          props.parts.map((part, index) => <Part key={index} name={part.name} exercises={part.exercises}/>)
        }
      </>
    )
  }
  
//   const Total = (props) => {
//     return (
//       <p>Number of exercises {props.parts.reduce((total, part) => total += part.exercises, 0)}</p>
//     )
//   }
  
  const Course = ({course}) => {

    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        {/* <Total parts={course.parts}/> */}
      </div>
    )
  }
  
  export default Course;