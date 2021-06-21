import React from 'react';
import { Button } from 'react-bootstrap';
import { ToDoProps } from '../models/todo';

const ToDo: React.FC<ToDoProps> = ({ todo, index, markTodo, removeTodo }) => {
	return (
    <div className='todo'>
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
      <div>
        <Button variant='outline-primary' onClick={() => markTodo(index)}>✓</Button>
        <Button variant='outline-danger' onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

export default ToDo;