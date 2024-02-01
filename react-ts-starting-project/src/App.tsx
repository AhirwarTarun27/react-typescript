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

  return (
    <div>
      <TodoForm onAddText={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
