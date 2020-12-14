import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

//Componentes
import Form  from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  //Estados
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('Todos');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Debe correr una vez cuando empieza la app
  useEffect(() => {
    getLocalTodos()
  }, []);

  //Use Effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status]);
  

  //Funciones
const filterHandler = () => {
  switch(status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed))
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => !todo.completed))
      break;
    default:
      setFilteredTodos(todos)
      break;
  }
}

//Guardando en el local storage
const saveLocalTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
  
}
const getLocalTodos = () => {
  if(localStorage.getItem('todos') == null){
    localStorage.setItem('todos', JSON.stringify([]))
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal)
  }
}
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
      />
      <TodoList
      filteredTodos={filteredTodos}
      setTodos={setTodos}
      todos={todos}
      />
    </div>
  );
}

export default App;
