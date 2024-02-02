import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  todoItem: string;
  itemRemoveHandler: () => void;
}> = (params) => {
  return (
    <li className={classes.item} onClick={params.itemRemoveHandler}>
      {params.todoItem}
    </li>
  );
};

export default TodoItem;
