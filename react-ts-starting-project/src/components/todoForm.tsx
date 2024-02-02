import { useContext, useRef } from 'react';
import classes from './todoForm.module.css';
import { TodosContext } from '../store/todos-context';

const TodoForm: React.FC = () => {
  const todoContext = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const inputValue = inputRef.current!.value;

    if (inputValue.trim().length === 0) {
      return;
    }
    todoContext.addTodo(inputValue);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
