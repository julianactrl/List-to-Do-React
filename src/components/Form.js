import React from 'react';

        
const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = e => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = e => { //For not refresh the page
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 100}
        ]) 
        setInputText('')
    }
    const statusHandler = e => {
        setStatus(e.target.value)
    }

    return (
    <form>
        <input 
        onChange={inputTextHandler}
        value={inputText}
        type="text" 
        className="todo-input" />
        <button 
        onClick={submitTodoHandler}
        className="todo-button" 
        type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        
        <div className="select">
            <select
            onChange={statusHandler}
            name="todos" 
            className="filter-todo">
                <option value="all">Todos</option>
                <option value="completed">Completado</option>
                <option value="uncompleted">Incompleto</option>
            </select>
        </div>
    </form>
    )
}

export default Form