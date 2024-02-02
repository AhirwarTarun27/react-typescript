import Todos from './components/Todos';
import TodoForm from './components/todoForm';
import { TodoContextProvider } from './store/todos-context';

function App() {
  return (
    <TodoContextProvider>
      <TodoForm />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
