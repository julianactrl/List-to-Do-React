import React from 'react';
import './App.css';
import { useState } from 'react';

//Componentes
import Form  from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('Todos')
  return (
    <div className="App">
      <header>
        <h1>Lista de Tareas 
           <span> by jumik@</span>
        </h1>
      </header>
      <Form  
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
      />
      <TodoList
      setTodos={setTodos}
      todos={todos}
      />
    </div>
  );
}

export default App;
