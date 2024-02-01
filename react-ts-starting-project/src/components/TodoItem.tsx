const TodoItem: React.FC<{ todoItem: string }> = (params) => {
  return <li>{params.todoItem}</li>;
};

export default TodoItem;
