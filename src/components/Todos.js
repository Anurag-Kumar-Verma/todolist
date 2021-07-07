import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    
    return (
        <div className="container-fluid text-white py-3">
            <h3 className="text-info text-center">Todos List</h3>
            {
                props.todoList.length === 0 ? <h4>No Todos to display</h4> : 
                props.todoList.map((item) => {
                    return (
                        <Todo item={item} key={item.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
