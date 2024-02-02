import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todoContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoContext.items.map((value) => (
        <TodoItem
          key={value.id}
          todoItem={value.text}
          itemRemoveHandler={todoContext.removeTodo.bind(null, value.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
