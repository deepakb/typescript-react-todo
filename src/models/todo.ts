export type ToDo  = {
  text: string;
  isDone: boolean;
};

export interface ToDoProps {
  todo: ToDo;
  index: number;
  markTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export interface FormToDoProps {
  addTodo: (text: string) => void;
}
