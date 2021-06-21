import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormToDoProps } from '../models/todo';

const FormToDo: React.FC<FormToDoProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={submitHandler}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control
          type='text'
          className='input'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Add new todo'
        />
      </Form.Group>
      <Button variant='primary mb-3' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default FormToDo;