import { useState, useEffect } from 'react';
import { TODOs } from "./components/TODOs";
import { CreateTODO } from "./components/CreateTODO";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTODOs() {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      setTodos(data.todos);
    }
    fetchTODOs();
  }, [])

  return (
   <div>
    <CreateTODO todos = {todos} setTodos = {setTodos}></CreateTODO>
    <TODOs todos = {todos} setTodos = {setTodos}></TODOs>
   </div>
  )
}

export default App
