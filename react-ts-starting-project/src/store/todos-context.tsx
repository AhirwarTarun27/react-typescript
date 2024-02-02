import React, { useState } from 'react';
import Todo from '../models/todo';

type TodoContextObj = {
  items: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (todo: string) => {},
  removeTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [new Todo('typeScript'), new Todo('react')];

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const deleteItemHandler = (deletedId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((item: Todo) => item.id !== deletedId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteItemHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
