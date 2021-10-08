import React, {useState, useEffect} from "react";
import Forms from './components/Forms';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  //state stuff
  const [inputText , setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] =  useState([]);
 //state stuff

 //USE EFFECTS
 useEffect(()=>{
  filterHandler();
 },[todos,status]);

 //functions
const filterHandler = () =>{
  switch(status){
    case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
};


  return (
    <div className="app-container">
      <header>AMIT's TODO LIST</header>
      <Forms inputText={inputText} todos={todos} setTodos={setTodos} setInputText= {setInputText} setStatus={setStatus}  />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
