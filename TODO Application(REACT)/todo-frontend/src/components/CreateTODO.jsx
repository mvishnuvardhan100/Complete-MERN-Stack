import { useState } from 'react';

export function CreateTODO(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const setTodos  = props.setTodos;

  async function addTODO() {
    await fetch("http://localhost:3000/todo", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        cmpleted: false
      })
    });
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data.todos);

  }

  return (
    <div>
      <h3>Title</h3>
      <input type="text" placeholder="Enter title" onChange = {(e) => setTitle(e.target.value)} value = {title}/>
      <p>Description</p>
      <input type="text" placeholder="Enter description" onChange = {(e) => setDescription(e.target.value)} value = {description}/>
      <br />
      <br />
      <button onClick = {addTODO}>Add TODO</button>
    </div>
  )
}