import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToDo as TODO } from './models/todo';
import ToDo from './Components/ToDo';
import FormToDo from './Components/FormToDo';

const App:React.FC = () => {
  const [todos, setTodos] = useState<TODO[]>([
    {
      text: 'This is a sampe todo',
      isDone: false
    }
  ]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
  };

  const markTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormToDo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <ToDo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;