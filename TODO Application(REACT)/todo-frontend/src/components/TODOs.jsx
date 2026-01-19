export function TODOs(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  async function markAsCompleted(id) {
    await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"  
      },
      body: JSON.stringify({
        _id: id
      })
    });
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data.todos);
  }

  return (
    <div>
      <h2>Your TODO list</h2>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick = {() => markAsCompleted(todo._id)}>{todo.completed == true? "Done!" : "Mark as Done?"}</button> 
          </div>
        )
      })}
    </div>
  )
}