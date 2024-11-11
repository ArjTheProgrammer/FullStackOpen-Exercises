const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div style={{
        color: message.includes("Added") || message.includes("Updated") ? "green" : "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }}>
        {message}
      </div>
    )
  }

  export default Notification