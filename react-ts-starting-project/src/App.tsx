import { useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/todoForm';
import Todo from './models/todo';

function App() {
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

  return (
    <div>
      <TodoForm onAddText={addTodoHandler} />
      <Todos items={todos} itemRemoveHandler={deleteItemHandler} />
    </div>
  );
}

export default App;
