import { useRef } from 'react';

const TodoForm: React.FC<{ onAddText: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const inputValue = inputRef.current!.value;

    if (inputValue.trim().length === 0) {
      return;
    }
    props.onAddText(inputValue);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
