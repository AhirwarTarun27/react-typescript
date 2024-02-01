import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (params) => {
  return (
    <ul>
      {params.items.map((value) => (
        <TodoItem key={value.id} todoItem={value.text} />
      ))}
    </ul>
  );
};

export default Todos;
