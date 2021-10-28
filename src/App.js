import './style/App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {GlobalStyle} from "./style/styles";
function App() {
 

  const [todoList, setTodoList] = useState([]);

  

  useEffect(() => {
    // storing input name
      if(todoList.length > 0){
        localStorage.setItem("todo", JSON.stringify(todoList));
      }
  }, [todoList]);

 
  const toggleTodoCheck = ({isDone, key}) => {
    const updatedTodoList = todoList.map((todo)=>{
        if(todo.key === key){
          return{
            ...todo,
            isDone
          }
        }
        return todo;

    })
    setTodoList(updatedTodoList);
  }

  const saveTodo = (value) => {
    const trimmedValue = value.trim();
    if(!trimmedValue){
      alert("Boş bırakmayınız!");
      return;
    }
    else {

      const todo={
        key:uuidv4(),
        title: trimmedValue,
        isDone: false
      }
      setTodoList([...todoList, todo]);
    }
    console.log(todoList);
  }
  const deleteTodo = (key) => {
    const filteredTodo = todoList.filter((todo) => {
      return todo.key !== key;
    });
    setTodoList(filteredTodo);
  };



  return (
 
          <div className="App">
               <GlobalStyle />
      <InputTodo saveTodo={saveTodo}/>
      <ListTodo list={todoList} toggleTodoCheck={toggleTodoCheck} deleteTodo={deleteTodo}/>
    </div>
 
  
  );
}

export default App;
