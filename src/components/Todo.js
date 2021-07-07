import React from 'react'

export const Todo = ({item, onDelete}) => {
    return (
        <div className="container py-2 text-start text-white">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button className="btn btn-danger" onClick={() => {onDelete(item)}}>Delete</button>
        </div>
    )
}
