import styles from "./todoitem.module.css";

// Note callback functions are helpful because they allow the function call to be delayed in time especially onClick when habdling parameters
// callback functions make sure the onClick functions are not called immediately

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    // console.log("delete: ", item);
    // loop through list of todos and filter out the desired todo item
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    // console.log("clicked: ", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    // console.log(todos);
  }

  const isComplete = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={isComplete} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
