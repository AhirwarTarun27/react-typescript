import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  itemRemoveHandler: (id: string) => void;
}> = (params) => {
  return (
    <ul className={classes.todos}>
      {params.items.map((value) => (
        <TodoItem
          key={value.id}
          todoItem={value.text}
          itemRemoveHandler={params.itemRemoveHandler.bind(null, value.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
