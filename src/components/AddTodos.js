import React, { useState } from 'react';

export const Addtodos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        
        if(!title || !desc) {
            alert("Title or Description can't be blank.")
        } else {
            props.addTodos(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className="container text-light text-start my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="txtTitle" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="txtTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="txtDesc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="txtDesc" />
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
