import React from 'react';
import { TodoItem } from '../MyComponent/TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };

  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3 text-primary'>Todos List</h3>
      {props.todos.length === 0 ? (
        <div className="text-center text-muted">No Todos to Display!!</div>
      ) : (
        props.todos.map((todo) => {
          return (
            <div className="card mb-3" key={todo.sno}>
              <div className="card-body">
                <TodoItem todo={todo} onDelete={props.onDelete} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
