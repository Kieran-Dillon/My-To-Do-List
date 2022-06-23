import './styles.css';
import Todo from './todo.js';
import TodoForm from './form.js';
import React from 'react';
import ReactDOM from 'react-dom';

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn Javascript',
      isCompleted: false,
    },
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'learn how to make this to-do list',
      isCompleted: false,
    },    
    {
      text: 'add the to-dos into the list',
      isCompleted: false,
    },
    {
      text: 'complete the to-dos in the list',
      isCompleted: false,
    }          
  ])
  
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
  }
  return (
    <>
    <div className="app">
      <div classname="todo-list">
        {todos.map((todo, i) => <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo}/>
        </div>
    </div>
    </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
