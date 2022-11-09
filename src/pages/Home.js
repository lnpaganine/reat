import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import logo from "../logo.svg";
import "../App.css";
import Todo from "../components/Todo";
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home(props) {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("All");

  const [isToggle, setToggle] = useState(false);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  const listHeadingRef = useRef(null);

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  useEffect(() => {
    const data = localStorage.getItem("listOfTasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listOfTasks", JSON.stringify(tasks));
  }, [tasks]);

  return; //(
  //<div
  //  className={
  //    isToggle ? "todoapplight stack-large" : "todoappdark stack-large"
  //  }
  //>
  //  <button
  //    type="button"
  //    className={isToggle ? "btn switch" : "btn switch2"}
  //    onClick={() => setToggle(!isToggle)}
  //  >
  //    <div className={isToggle ? "ball" : "ball2"}>test</div>
  //    <span className="visually-hidden">{props.name}</span>
  //  </button>
  //  <h1>TodoMatic</h1>
  //  <Form addTask={addTask} setTasks={setTasks} />
  //  <div className="filters btn-group stack-exception">{filterList}</div>
  //  <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  //    {headingText}
  //  </h2>
  //  <ul
  //    role="list"
  //   className="todo-list stack-large stack-exception"
  //    aria-labelledby="list-heading"
  //  >
  //    {taskList}
  //  </ul>
  //</div>
  //);
}
export default Home;
