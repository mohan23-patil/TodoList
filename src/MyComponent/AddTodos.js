import React, { useState } from 'react'

export const AddTodos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title Or Description Cannot be Blank !!")
        }
        else{
            props.addTodos(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3 className='text-primary'>Add a Todo Here</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label fw-bold">Discription</label>
                    <input type="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success fw-bold">Add to Todos</button>
            </form>
        </div>
    )
}

