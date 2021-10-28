import React from 'react'
import {  TodoItem, DeleteButton } from '../style/styles'
export  default function ListTodo({ list = [], toggleTodoCheck, deleteTodo}) {
    

    return (
      list.map((todo) => {

            return(
                <div>
                    <input type="checkbox" style={{  marginRight:"15px"
                   }} 
                    defaultChecked={todo.isDone}
                    onClick={(event)=> toggleTodoCheck({
                        isDone:event.target.checked,
                        key:todo.key
                    })}
                    />        
                     <TodoItem isDone={todo.isDone}>{todo.title}</TodoItem>

                    <DeleteButton onClick={()=>deleteTodo(todo.key)}>Delete</DeleteButton>
                    <hr></hr>
                </div>
            )
        })
    
    )
}
