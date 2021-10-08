import React from 'react'

export default function Todo({todo,todos,setTodos}) {
   const deleteHandler = () =>{
       //console.log(todos);
       setTodos(todos.filter((el) => el.id !== todo.id));
       //console.log(todo);
   }
   const completeHandler = () =>{
       
     setTodos(todos.map(item =>{ 
         if(item.id=== todo.id){

            return{
                ...item, completed: !item.completed
            }
        }
        return item;
     }))
      
       
   }

    return (
        
                            <div className={`todo ${todo.completed ? "completed":""}`} >
                                
                                <li className="todo-item">{todo.text}</li>
                                <button onClick={completeHandler} className="complete-btn">
                                    <i className="fas fa-check"></i>
                                </button>
                                <button onClick={deleteHandler} className="trash-btn">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
    )
}
