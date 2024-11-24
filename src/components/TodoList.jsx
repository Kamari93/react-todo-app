import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  // sort the todos by done in ascending order by converting the boolean to a number:
  let sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item, index) => (
        <TodoItem item={item} key={index} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
